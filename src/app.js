const hbs = require('hbs');
const path = require('path');

const express = require('express');

const http2Express = require('http2-express-bridge');

const app = http2Express(express);

const PUBLIC_DIRECTORY = path.join(__dirname, '..', 'public');
const VIEWS_DIRECTORY = path.join(__dirname, 'views');
const PARTIALS_DIRECTORY = path.join(VIEWS_DIRECTORY, 'partials');

app.use(express.static(PUBLIC_DIRECTORY));

app.set('view engine', 'hbs');
app.set('views', VIEWS_DIRECTORY);
hbs.registerPartials(PARTIALS_DIRECTORY);
// require('./views/helpers/sample.helper').init();

app.get('/', (req, res) => {
  res.render('homepage', { });
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy', { });
});

app.get('/terms-and-conditions', (req, res) => {
  res.render('tc', { });
});

app.get('/disclaimer', (req, res) => {
  res.render('disclaimer', { });
});

app.get('/*', (req, res) => {
  res.render('404', { });
});

module.exports = { app };
