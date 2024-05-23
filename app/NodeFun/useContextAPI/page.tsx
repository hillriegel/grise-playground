'use client'

import React, { useContext } from 'react';
import { MyContext, MyProvider } from './Context'; // ensure correct path
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import { Grid } from '@mui/material';
import CodeToHTMLDisplay from '../../utils/convertCodeToHtml';
import { firstComponentCode } from './FirstComponent';
import { myContextCode } from './Context';

const ContextDemo: React.FC = () => {
    return (
        <MyProvider>
            <InternalComponent />
        </MyProvider>
    );
};

const pageCode = `
'use client'

import React, { useContext } from 'react';
import { MyContext, MyProvider } from './Context'; // ensure correct path
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import { Grid } from '@mui/material';
import CodeToHTMLDisplay from '../../utils/convertCodeToHtml';
import { firstComponentCode } from './FirstComponent';
import { myContextCode } from './Context';

const ContextDemo: React.FC = () => {
    return (
        <MyProvider>
            <InternalComponent />
        </MyProvider>
    );
};

const InternalComponent: React.FC = () => {
    const context = useContext(MyContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { key, updateState } = context;

    return (
        <main className="flex min-h-screen flex-col">
            <div style={{border: 'solid 1px', padding: '20px',
                marginLeft: '-40px', 
                width: '810px', backgroundColor: '#155263'}}>
                <h1>Node Fun :: Using the Context API for Shared State</h1>
            </div>
            <div className="main-content">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                            <h2>Components Sharing State with Context </h2>
                            <p>Here we have two components, each with 
                            a simple button. The button action updates 
                            a shared context state of a key value.</p>
                        <p><b>Current Key:</b> {key}</p>
                        <FirstComponent />
                        <SecondComponent />
                    </Grid> 
          
                    <Grid item xs={12} sm={7}>
                        <h3>Context Provider</h3>
                        <div className="code-content">
                            <CodeToHTMLDisplay code={myContextCode} />
                            <br />
                        </div>

                        <h3>First Component</h3>
                        <div className="code-content" style={{padding: '20px'}}>
                            <CodeToHTMLDisplay code={firstComponentCode} />
                        </div>
                    </Grid>
                </Grid>
                </div>
        </main>
    );
};

export default ContextDemo;

`
const InternalComponent: React.FC = () => {
    const context = useContext(MyContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { key, updateState } = context;

    return (
        <main className="flex min-h-screen flex-col">
            <div style={{border: 'solid 1px', padding: '20px', marginLeft: '-40px', width: '810px', backgroundColor: '#155263'}}>
                <h1>Node Fun :: Using the Context API for Shared State</h1>
            </div>
            <div className="main-content">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                                <h2>Components Sharing State with Context </h2>
                            <p>Here we have two components, each with a simple button. The button action updates a shared context state of a key value.</p>
                        <p><b>Current Key:</b> {key}</p>
                        <FirstComponent />
                        <SecondComponent />
                    </Grid> 
          
                    <Grid item xs={12} sm={7}>
                        <h3>Context Provider</h3>
                        <div className="code-content">
                            <CodeToHTMLDisplay code={myContextCode} />
                            <br />
                        </div>

                        <h3>First Component</h3>
                        <div className="code-content" style={{padding: '20px'}}>
                            <CodeToHTMLDisplay code={firstComponentCode} />
                        </div>

                        <h3>Page (Parent Component)</h3>
                        <div className="code-content" style={{padding: '20px'}}>
                            <CodeToHTMLDisplay code={pageCode} />
                        </div>
                    </Grid>
                </Grid>
                </div>
        </main>
    );
};

export default ContextDemo;
