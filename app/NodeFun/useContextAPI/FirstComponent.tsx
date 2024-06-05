'use client'

import React, { useContext } from 'react';
import { MyContext } from './Context'; // ensure correct path
import Button from '@mui/material/Button';


const FirstComponent: React.FC = () => {

    const context = useContext(MyContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { key, updateState } = context;


    return (
        <div style={{margin: "20px"}}>
                <Button className="link-button" style={{width: '100%'}} variant="contained" onClick={() => updateState({ key: 'First Value' })}>
                    Update Key from First Component
                </Button>
            </div>
    );
};


export const firstComponentCode = `
// FirstComponent.tsx
'use client'

import React, { useContext } from 'react';
import { MyContext } from './Context'; // ensure correct path
import Button from '@mui/material/Button';


const FirstComponent: React.FC = () => {
    const context = useContext(MyContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { key, updateState } = context;


    return (
        <div style={{margin: "20px"}}>
                <Button variant="contained" onClick={() => 
                        updateState({ key: 'First Value' })}>
                    Update Key from First Component
                </Button>
            </div>
    );
};

export default FirstComponent;`


export default FirstComponent;