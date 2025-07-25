const axios = require("axios");
const fs = require("fs");
const path = require("path");

const mockDataPath = path.join(__dirname, "../data/mockData.json");
const mockItemDetailsPath = path.join(__dirname, "../data/mockItemDetails.json");

const searchItems = async (req, res) => {
  try {
    //const { q: query, offset = 0 } = req.query;
    //const response = await axios.get(
      //`https://api.mercadolibre.com/sites/MLA/search?q=${query}&offset=${offset}`
    //);

    //const formattedData = formatSearchResults(response.data);

    //res.json(formattedData);
    setTimeout(() => {
      const mockData = JSON.parse(fs.readFileSync(mockDataPath));
      res.json(mockData);
    }, 300);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItemDetails = async (req, res) => {
  try {
    // const { id } = req.params;
    // const [itemResponse, descriptionResponse] = await Promise.all([
    //   axios.get(`https://api.mercadolibre.com/items/${id}`),
    //   axios.get(`https://api.mercadolibre.com/items/${id}/description`),
    // ]);

    // const formattedData = formatItemDetails(
    //   itemResponse.data,
    //   descriptionResponse.data
    // );

    // res.json(formattedData);
    setTimeout(() => {
      const mockData = JSON.parse(fs.readFileSync(mockItemDetailsPath));
      res.json(mockData);
    }, 300);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function formatSearchResults(data) {
  return data.results.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    currency_id: item.currency_id,
  }));
}

function formatItemDetails(itemData, descriptionData) {
  return {
    id: itemData.id,
    title: itemData.title,
    price: itemData.price,
    currency_id: itemData.currency_id,
    description: descriptionData.plain_text,
    pictures: itemData.pictures.map((picture) => picture.url),
    condition: itemData.condition,
    sold_quantity: itemData.sold_quantity,
    category_id: itemData.category_id,
    shipping: itemData.shipping.free_shipping,
  };
}

module.exports = { searchItems, getItemDetails };
