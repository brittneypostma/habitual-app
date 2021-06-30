const express = require('express')
const router = express.Router()
// const item = require('../controller/item')
const { ensureGuest } = require('../controllers/auth.controller')

// router.get('/', ensureGuest, item.getAllItems)
// router.get('/categories', ensureGuest, item.getItemCategories)
// router.get('/category/:category', ensureGuest, item.getItemsInCategory)
// router.get('/:id', ensureGuest, item.getItem)
// router.post('/', ensureGuest, item.addItem)
// router.put('/:id', ensureGuest, item.editItem)
// router.patch('/:id', ensureGuest, item.editItem)
// router.delete('/:id', ensureGuest, item.deleteItem)

module.exports = router
