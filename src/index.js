import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer.js';
import { devToolsEnhancer } from 'redux-devtools-extension';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(rootReducer, persistedState, devToolsEnhancer());

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const app = (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(app , document.getElementById('root'));
console.log(store);
