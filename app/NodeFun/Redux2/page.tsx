'use client'

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CodeToHTMLDisplay from '../../utils/convertCodeToHtml';
import GithubButton from '../../DesignComponents/GithubButton';
import HexagonIcon from '@mui/icons-material/Hexagon';

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
        <main className="flex min-h-screen flex-col">
        <div className="page-title">
        <h1><HexagonIcon style={{marginBottom: '4px'}} /> &nbsp; Node Fun :: React App Using Redux</h1>
      </div>

      <div className="main-content">
            
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <div>
                                <h1>Redux Demo</h1>
                                <div className="component" style={{marginTop: '20px'}}>
                              
                               
                                    <iframe 
                                        src="https://grisecon-redux-cart.vercel.app/"
                                        title="Embedded React App"
                                        width="100%"
                                        height="900px"
                                        style={{
                                            backgroundColor: '#ffffff', 
                                            borderRadius: '8px',
                                            boxShadow: '1px 2px 3px 3px rgba(0, 0, 0, 0.3)'}
                                        }
                                    />
                                </div>
    
                            </div>
                                           
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                                <div style={{marginTop: '60px'}}>
                                    <GithubButton link="https://github.com/hillriegel/grisecon-redux-cart" label="griscon-redux-cart" />
                                  
                                </div>
                            <br />
                            </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                    <h2>Creating a Shopping Cart that uses Redux</h2>
                        <p>This demo shows how managing state with redux (and redux-toolkit) allows state to be used within multiple components
                            without prop drilling. Separate slices are usedin the store for organization purposes.
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

                       
                      
                    </Grid>
                </Grid>

                <br />

        
              </div>
          </main>
    );
};
