const express = require('express');
const weatherController = require('../controllers/weatherController');
const currencyController = require('../controllers/currencyController');
const router = express.Router();

router.get('/weather', weatherController.getWeather);
router.get('/currency', currencyController.getCurrencyExchangeRates);

module.exports = router;
