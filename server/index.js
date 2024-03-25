const express = require('express');
const getRegion = require('./routes/getRegion').getRegion;
const getProviderList = require('./routes/getProviderList').getProviderList;
const getGenreList = require('./routes/getGenreList').getGenreList;
const getViewingOptions = require('./routes/getViewingOptions').getViewingOptions;

const app = express();
const port = 3001;

app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next();
});

app.get('/api', (req, res) => {
    res.send(apiKey);
});

app.get('/getRegion', getRegion);
app.get('/getProviderList', getProviderList);
app.get('/getGenreList', getGenreList);
app.get('/getViewingOptions', getViewingOptions);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});