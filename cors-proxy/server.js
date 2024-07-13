// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4000;

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://api.timbu.cloud/products', {
      params: {
        organization_id: '412f7382572440f0a6a1191e3d65a77c',
        reverse_sort: false,
        page: 1,
        size: 10
      },
      headers: {
        'APP_ID': '1VPSVW4FENHI09L',
        'API_KEY': 'ab2f5ea9b8f841b695f321ca12c160a720240713012101546394',
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
