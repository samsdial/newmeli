const axios = require("axios");
const fs = require("fs");
const path = require("path");

const mockDataPath = path.join(__dirname, "../data/mockData.json");
const mockItemDetailsPath = path.join(
  __dirname,
  "../data/mockItemDetails.json"
);

const searchItems = async (req, res) => {
  try {
    const { q: query, page = 1 } = req.query;
    const itemsPerPage = 10;
    const currentPage = parseInt(page, 10);


    setTimeout(() => {
      try {
        const mockData = JSON.parse(fs.readFileSync(mockDataPath));
        const allItems = mockData.items || [];

        let filteredItems = allItems;
        if (query && query.trim() !== "") {
          filteredItems = allItems.filter(
            (item) =>
              item.title.toLowerCase().includes(query.toLowerCase()) ||
              item.seller.toLowerCase().includes(query.toLowerCase())
          );
        } else {
          console.log("No query provided, showing all items");
        }

        const totalItems = filteredItems.length;
        const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
        const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
        const validOffset = (validCurrentPage - 1) * itemsPerPage;
        const paginatedItems = filteredItems.slice(
          validOffset,
          validOffset + itemsPerPage
        );

        console.log("Pagination calculation:", {
          totalItems,
          itemsPerPage,
          totalPages,
          validCurrentPage,
          validOffset,
          paginatedItemsCount: paginatedItems.length,
          mathCeilCheck: Math.ceil(totalItems / itemsPerPage),
        });

        const response = {
          items: paginatedItems,
          categories: mockData.categories || [],
          pagination: {
            current_page: validCurrentPage,
            total_pages: totalPages,
            total_items: totalItems,
            items_per_page: itemsPerPage,
            has_next_page: validCurrentPage < totalPages,
            has_prev_page: validCurrentPage > 1,
            next_page:
              validCurrentPage < totalPages ? validCurrentPage + 1 : null,
            prev_page: validCurrentPage > 1 ? validCurrentPage - 1 : null,
          },
        };

        res.json(response);
      } catch (fileError) {

        res.status(500).json({
          error: "Error reading data",
          items: [],
          pagination: {
            current_page: 1,
            total_pages: 1,
            total_items: 0,
            items_per_page: itemsPerPage,
            has_next_page: false,
            has_prev_page: false,
            next_page: null,
            prev_page: null,
          },
        });
      }
    }, 300);
  } catch (error) {
    console.error("Search items error:", error);
    res.status(500).json({
      error: error.message,
      items: [],
      pagination: {
        current_page: 1,
        total_pages: 1,
        total_items: 0,
        items_per_page: 10,
        has_next_page: false,
        has_prev_page: false,
        next_page: null,
        prev_page: null,
      },
    });
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
