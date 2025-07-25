const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/items', itemsController.searchItems);
router.get('/items/:id', itemsController.getItemDetails);

module.exports = router;