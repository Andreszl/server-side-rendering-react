import React from "react";
import config from './config';
import ReactDOMServer from 'react-dom/server';

import axios from 'axios';

import App from './src/components/App';

const serverRender = () => 
    axios.get(`${config.serverUrl}/api/data`)
        .then(res => {
            return {
                initialMarkup : ReactDOMServer.renderToString(<App initialData={res.data} />),
                initialData : res.data
            }
        });

export default serverRender;

