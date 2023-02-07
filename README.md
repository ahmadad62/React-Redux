# React Redux Learning

The above code is a JavaScript code for a React and Redux-based application. It contains the following:

- 1.An implementation of a React component named App. The component uses the useDispatch and useSelector hooks from the react-redux library to connect the component to the Redux store and to access the state from the store. The component displays the adad value from the state and provides buttons for incrementing and decrementing the value.

- 2.The implementation of a Redux store for the application, created using the createStore function from the redux library. The store is configured with the redux-thunk middleware and the development tools from the redux-devtools-extension library.

- 3.The implementation of a Redux reducer named calcReducer, responsible for managing the calculation-related state in the application. The reducer handles two actions: INCREMENT_ADAD and DECREMENT_ADAD, and returns a new state based on the action type.
## index.js:
This code is using React and ReactDOM to render a React application. It creates a React root using the createRoot method from ReactDOM and renders the application inside the root element with id "root".

The code uses the Provider component from the react-redux library to provide the Redux store to the React components. The store is imported from ./redux/store. The main component of the application, App, is also imported and rendered inside the Provider.

Finally, the code runs in strict mode, ensuring that any potential errors or problem areas are easier to detect.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## App.js

- This code defines a React component named App. The component makes use of the useDispatch and useSelector hooks from the react-redux library to access the Redux store.

- The useDispatch hook provides access to the dispatch function, which allows the component to dispatch actions to the Redux store.

- The useSelector hook is used to access data from the Redux store. The hook takes a function as an argument, which is used to select the data from the store's state. In this case, the function is selecting the value of state.calc.adad.

- The component renders a div that contains a text label and two buttons, one for incrementing the value of adad and one for decrementing it. When either button is clicked, the dispatch function is used to dispatch an action to the Redux store, either INCREMENT_ADAD or DECREMENT_ADAD, depending on which button was clicked.

Finally, the value of adad is displayed in a h2 element.

```javascript
import { useDispatch, useSelector } from "react-redux"


export default function App() {
  const dispatch = useDispatch();
  //accsses to re
  const { adad } = useSelector(
    state => ({

      adad: state.calc.adad

    }))

  return (
    <div>
      APP
      <h2>{adad} </h2>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT_ADAD"
          })}
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT_ADAD"
          })}
      >
        -
      </button>
    </div>
  )
}
import { useDispatch, useSelector } from "react-redux"


export default function App() {
  const dispatch = useDispatch();
  //accsses to re
  const { adad } = useSelector(
    state => ({

      adad: state.calc.adad

    }))

  return (
    <div>
      APP
      <h2>{adad} </h2>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT_ADAD"
          })}
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT_ADAD"
          })}
      >
        -
      </button>
    </div>
  )
}
```
- root reducer
```javascript
import { combineReducers } from "redux";
import { calcReducer } from "./calc/calcReducer";


const rootReducer = combineReducers({
    calc: calcReducer
})


export default rootReducer
```

## Redux store

- This code defines a Redux store for the React application. The store is created using the createStore function from the redux library. The function takes three arguments:

- rootReducer: the root reducer, which is a combination of all the individual reducers in the application.

- initialState: the initial state of the store. In this case, it's an empty object.

- composeWithDevTools(applyMiddleware(...middleware)): this is the store enhancer, which is used to apply middleware to the store. The code uses the composeWithDevTools function from the redux-devtools-extension library to enhance the store with the development tools. The middleware applied to the store is the redux-thunk middleware, which allows the dispatching of asynchronous actions.

Finally, the store is exported and can be imported and used in other parts of the application.
```javascript
// import { configureStor } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer";

const initialState = {}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
```
## Redux reducer
This code defines a Redux reducer named calcReducer. The reducer is responsible for managing the state of the calculation-related data in the application.

The reducer takes two arguments:

- state: the current state of the store. In this case, the initial state is defined as an object with two properties, adad and mahsoolat, both set to 0.

- action: an action dispatched from the React components, which includes a type property indicating the type of action to be taken.

The switch statement in the reducer checks the value of the action.type and returns a new state based on the action type.

The INCREMENT_ADAD case returns a new state with adad incremented by 1. The DECREMENT_ADAD case returns a new state with adad decremented by 1. If the action type is not recognized, the current state is returned.
```javascript

const initialState = {
    adad: 0,
    mahsoolat: 0

}

export const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_ADAD':
            return {
                ...state,
                adad: state.adad + 1
            }
        case 'DECREMENT_ADAD':
            return {
                ...state,
                adad: state.adad - 1

            }
        default:
            return state
    };

}
```












# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

