import React from 'react';
import { hydrate } from 'react-dom';
import axios from 'axios';

import App from './components/App';


hydrate(
    <App initialData={window.data} />,
    document.getElementById('root')
)


