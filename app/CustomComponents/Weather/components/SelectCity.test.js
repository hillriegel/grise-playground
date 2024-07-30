import { render, screen, waitFor } from '@testing-library/react';
import SelectCity from './SelectCity';

describe('SelectCity', () => {
  it('should render the SelectCity component', async () => {
    render(<SelectCity />);

    await waitFor(() => {
      expect(screen.getByText('California')).toBeInTheDocument();
    });

    await waitFor(() => {
        expect(screen.getByText('Select a city...')).toBeInTheDocument();
      });
  });
});