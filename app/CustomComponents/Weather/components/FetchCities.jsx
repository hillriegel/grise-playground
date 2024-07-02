import { useState, useEffect } from 'react';
import Select from 'react-select';

export default function FetchCities({ state = 'CA', setCoords }) {
    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        async function fetchCities() {
            setLoading(true);
            setError(null);
            setCities([]);

            try {
                const response = await fetch(
                    `https://parseapi.back4app.com/classes/Usabystate_${state}?limit=1000&order=name&excludeKeys=featureCode,objectId`,
                    {
                        headers: {
                            'X-Parse-Application-Id': 'ZpzMIRxCbLWomiMOx1iOdaevlH21GbYUwohchliS', // This is your app's application id
                            'X-Parse-REST-API-Key': 'cKTWZm9bSK8PjTRl9pOJs6Pi2K7jcqSs38jZxTtK', // This is your app's REST API key
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Could not fetch cities');
                }

                const data = await response.json();
                setCities(data.results); // Assuming `results` is the array of cities
            } catch (error) {
                console.error('Error while fetching cities:', error);
                setError(`Error: ${error.message}`);
            } finally {
                setLoading(false);
            }
        }

        fetchCities();
    }, [state]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!cities.length) return <div>No cities found</div>;

    const handleChange = (selectedOption) => {
        setCoords({lat: selectedOption.value.lat, lon: selectedOption.value.lon})
        setSelectedCity(selectedOption);
    };

    const options = cities.map((city) => ({
        value: { lat: city.location.latitude, lon: city.location.longitude },
        label: city.name,
    }));

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
        <h3 style={{ marginRight: '10px' }}>Cities in {state}</h3>
        <Select
            options={options}
            onChange={handleChange}
            value={selectedCity}
            placeholder="Select a city..."
            isSearchable
        />
        </div>
    );
}
