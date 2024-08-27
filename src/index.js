import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import ScrollTop from './component/ScrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
        <ScrollTop />
        <App />
    </HashRouter>
    
    //</BrowserRouter>
);

reportWebVitals();
