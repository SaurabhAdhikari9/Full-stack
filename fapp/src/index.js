import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './login'
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);         // createRoot(container!) if you use TypeScript
root.render(<Login tab="home" />);

reportWebVitals();