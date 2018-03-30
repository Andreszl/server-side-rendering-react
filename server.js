import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server
    .get('/', (req, res) =>{
        serverRender()
            .then(({initialMarkup ,initialData}) => {
                res.render('index', {
                    initialMarkup,
                    initialData
                });
            })
            .catch(console.error)
    })
    .use('/api', apiRouter )
    .use(express.static('public'))
    .listen(config.port, config.host, () => {
        console.log('listening on port ', config.port);
    });




