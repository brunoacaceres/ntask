const express = require('express');
const consign = require('consign')

const app = express();

app.set('json spaces', 2);

consign()
  .include('models')
  .then('config/middlewares.js')
  .then('routes')
  .then('config/boot.js')
  .into(app);
