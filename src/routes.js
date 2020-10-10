const express = require('express');
const Package = require('./controllers/Package');

const routes = express.Router();

routes.get('/api', Package.track)

module.exports = routes