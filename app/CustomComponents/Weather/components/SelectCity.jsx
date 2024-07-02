import FetchCities from "./FetchCities";
import Select from 'react-select';
import { useState } from 'react';
import { stateOptions } from './STATES';

export default function SelectCity({ setCoords }) {
    const [state, setState] = useState('CA');

    // Find the option that matches the current `state` abbreviation
    const selectedOption = stateOptions.find(option => option.value === state);

    const handleChange = (selectedOption) => {
        // Update `state` with the two-letter abbreviation from the selected option
        setState(selectedOption.value);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <div style={{ width: '200px', marginRight: '20px' }}>
                    <Select
                        options={stateOptions}
                        onChange={handleChange}
                        value={selectedOption} // Use the found option object as the value
                        placeholder="Select a State..."
                        isSearchable
                    />
                </div>
                
                <FetchCities state={state} setCoords={setCoords} />
            </div>
        </>
    );
}