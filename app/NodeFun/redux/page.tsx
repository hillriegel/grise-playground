'use client'

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import CodeToHTMLDisplay from '../../utils/convertCodeToHtml';


export default function CssDemo() {
    type FlexDirection = 'row' | 'column';
    type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

    const [alignment, setAlignment] = useState<AlignItems>('flex-start');
    const [direction, setDirection] = useState<FlexDirection>('row');

    const createStoreCode = `
    import { createStore } from 'redux';
    
    // Initial state
    const initialState = {
      counter: 0
    };
    
    // Reducer function
    function rootReducer(state = initialState, action) {
      switch (action.type) {
        case 'INCREMENT':
          return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
          return { ...state, counter: state.counter - 1 };
        default:
          return state;
      }
    }
    
    // Create store
    const store = createStore(rootReducer);
    
    export default store;
    `;

    const includeReduxCode = `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import { Provider } from 'react-redux';
    import store from './store';

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );`;
    
    const appJsCode = `
    import React from 'react';
    import { connect } from 'react-redux';
    
    function App({ counter, increment, decrement }) {
        return (
            <div>
                <h1>Counter: {counter}</h1>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrease</button>
            </div>
        );
    }
    
    const mapStateToProps = state => ({
        counter: state.counter
    });
    
    const mapDispatchToProps = dispatch => ({
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(App);
    `;

    return (
        <main className="flex min-h-screen flex-col" >
            <div style={{border: 'solid 1px', 
            padding: '20px', 
            marginLeft: '-40px', 
            width: '810px',
            backgroundColor: '#155263'}}>
                <h1>Node Fun :: Simple React App Using Redux</h1></div>


          <div className="main-content">
            
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                    <h2>Redux</h2>
                        <p>In my years of using React, I've always managed state locally within my modules and components.
                            Alternatively I've used the useContext hook for sharing state.
                        </p>
                        <br />
                        <h3>Benefits of Redux</h3>
                        <p>
                            Redux offers the benefits of <b>Predictable State Management.</b> Redux enforces a strict 
                            unidirectional data flow and handles changes through a centralized store with reducers. 
                            This setup ensures that the state is predictable and consistent across the application,
                            which is especially beneficial in large applications with complex state interactions.
                        </p>
                        <p>
                            <b>Centralized State</b> Redux stores the entire state of your application in one place, 
                            making it easier to track state changes and manage the data flow. 
                            This centralized state management is helpful for features like undo/redo or initializing 
                            the app from a persisted state.
                        </p>
                        <br />
                        
                        
                        <h3>Downsides of Redux</h3>
                        <p>
                            While Redux has many benefits, it's not always the best choice for every project. 
                            It can introduce a lot of boilerplate, making it overkill for smaller or simpler 
                            applications. It also has a steeper learning curve compared to basic React state 
                            management. As such, it's important to evaluate the complexity of your application's 
                            needs before deciding to use Redux.
                        </p>
                        <p>
                            <h2>Creating a simple React app that uses Redux</h2>
                            <br />
                            checkout the repository here:
                            <div className="link-button">
                                <a href="https://github.com/hillriegel/grise_express_backend" target="new">github: my-redux-app</a>
                            </div>
                            <br />
                        </p>
                       <div className="terminal-content">
                            npx create-react-app my-redux-app<br />
                            npm start<br />
                            npm install redux react-redux<br />
                        </div>

                        <br />
                        <h3>Create a Redux Store</h3>
                        <p>
                          Create a file named store.js in the src folder. This will be our Redux store configuration.
                        </p>
                        
                      
                        <div className="code-content">
                            <CodeToHTMLDisplay code={createStoreCode} />
                        </div>

                        <h3>Provide the Redux Store to React</h3>
                        <p>
                            Modify index.js to include the Redux store in your React app using the Provider from react-redux.
                        </p>
                        <div  className="code-content" style={{paddingBottom: '20px', paddingTop: '10px'}}>
                            <CodeToHTMLDisplay code={includeReduxCode} />
                        </div>   

                        <h3>Modify the App.js</h3>  
                        <p>
                            Update App.js to connect to the Redux store and dispatch actions.
                        </p> 
                        <div className="code-content" style={{padding: '20px'}}>
                            <CodeToHTMLDisplay code={appJsCode} />
                        </div>   

                    </Grid>
                </Grid>

                <br />

        
              </div>
          </main>
    );
};
