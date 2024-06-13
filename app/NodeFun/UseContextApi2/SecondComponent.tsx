'use client'

import React, { useContext } from 'react';
import { MyContext, MyProvider } from './Context'; // ensure correct path
import Button from '@mui/material/Button';

const SecondComponent: React.FC = () => {
    const context = useContext(MyContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { key, updateState } = context;

    return (
        <div style={{margin: '20px'}}>
                <Button className="link-button" style={{width: '100%'}}variant={'contained'} onClick={() => updateState({ key: 'Second Value' })}>
                    Update Key from Second Component
                </Button>
            </div>
    );
};

export default SecondComponent;