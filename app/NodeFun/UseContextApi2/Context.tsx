// Context.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface IContextState {
    key: string;
    updateState: (newState: { key: string }) => void;
}

export const MyContext = createContext<IContextState | null>(null);

export const myContextCode = `
    // Context.tsx
    import React, { createContext, useState, ReactNode } from 'react';

    interface IContextState {
        key: string;
        updateState: (newState: { key: string }) => void;
    }

    export const MyContext = createContext<IContextState | null>(null);

    export const MyProvider: React.FC<{children: ReactNode}> = ({ children }) => {
        const [key, setKey] = useState('initialValue');

        const updateState = (newState: { key: string }) => {
            setKey(newState.key);
        };

        return (
            <MyContext.Provider value={{ key, updateState }}>
                {children}
            </MyContext.Provider>
        );
    };
`

export const MyProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [key, setKey] = useState('initialValue');

    const updateState = (newState: { key: string }) => {
        setKey(newState.key);
    };

    return (
        <MyContext.Provider value={{ key, updateState }}>
            {children}
        </MyContext.Provider>
    );
};
