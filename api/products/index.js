const { Router } = require('express')
const router = Router()
const { getProducts, getProduct, createProduct, removeProduct, updateProduct } = require('./controller')

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(getProduct).delete(removeProduct).put(updateProduct)

module.exports = router
