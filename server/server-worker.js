const express = require('express');
const path = require('path');
const app = express();
const apiProxyRouter = require('./api-proxy-router');



app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/api', apiProxyRouter);

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

app.listen(8081, function() {
    console.log('Server listening on port 8081');
})