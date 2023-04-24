import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './root';
import {store} from "./store/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="Loading...">
        <Provider store={store}>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </Provider>
    </Suspense>

);
