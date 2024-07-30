import { render, screen, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import GetForecast from './GetForecast';

global.fetch = jest.fn();

const mockFetch = (data) => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );
  };

describe('GetForecast', () => {
  it('should render the GetForecast component', async () => {
    render(<GetForecast />);

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('renders forecast data correctly', async () => {
    const mockData = {
      name: 'San Francisco',
      weather: [{ main: 'Clear' }],
      main: {
        temp: 68,
        feels_like: 70,
        temp_min: 65,
        temp_max: 75,
        pressure: 1012,
        humidity: 60,
      },
    };

    mockFetch(mockData);

    render(<GetForecast setBackground={() => {}} />);

    await waitFor(() => {
        expect(screen.getByText('Weather Forecast for San Francisco')).toBeInTheDocument();
        expect(screen.getByText('Clear')).toBeInTheDocument();
  
        const forecastDiv = screen.getByText('Weather Forecast for San Francisco').closest('div');
  
        const tempElement = within(forecastDiv).getByText((content, element) =>
            element.tagName.toLowerCase() === 'b' && content.includes('Temp:')
          ).nextSibling;
    

    
          const feelsLikeElement = within(forecastDiv).getByText((content, element) =>
            element.tagName.toLowerCase() === 'b' && content.includes('Feels like:')
          ).nextSibling;
    

    
          const minTempElement = within(forecastDiv).getByText((content, element) =>
            element.tagName.toLowerCase() === 'b' && content.includes('Min:')
          ).nextSibling;
    
    
          const maxTempElement = within(forecastDiv).getByText((content, element) =>
            element.tagName.toLowerCase() === 'b' && content.includes('Max:')
          ).nextSibling;
    
    
          const pressureElement = within(forecastDiv).getByText((content, element) =>
            element.tagName.toLowerCase() === 'b' && content.includes('Pressure:')
          ).nextSibling;
    
    
          const humidityElement = within(forecastDiv).getByText((content, element) =>
            content.includes('Humidity:')
          ).nextSibling;
    
        
      });
  });

  it('handles fetch error', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    render(<GetForecast setBackground={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
    });
  });


});