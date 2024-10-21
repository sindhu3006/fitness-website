const axios = require('axios');

exports.getCurrencyExchangeRates = async (req, res) => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching currency data' });
  }
};
