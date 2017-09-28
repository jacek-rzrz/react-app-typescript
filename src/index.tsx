import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { combineReducers, createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const reducer = combineReducers<StoreState>({enthusiasmLevel: enthusiasm, languageName: () => 'TypeScript'});

const store = createStore<StoreState>(reducer, {
    enthusiasmLevel: 3,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
