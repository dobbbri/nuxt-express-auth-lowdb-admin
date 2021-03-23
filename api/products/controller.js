const { nanoid } = require('nanoid')
const { conn } = require('../db')

const controller = {}

controller.getProducts = async (req, res, next) => {
  try {
    const products = await conn().get('products').sortBy('name').value()
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

controller.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await conn().get('products').find({ id }).value()
    res.json(product)
  } catch (error) {
    next(error)
  }
}

controller.createProduct = async (req, res, next) => {
  try {
    const { show, name, unit, amount } = req.body
    const newProduct = { id: nanoid(), show, name, unit, amount }
    console.log('---> ', newProduct)
    await conn().get('products').push(newProduct).write()
    res.status(200).json({ message: 'Produto criado' })
  } catch (error) {
    next(error)
  }
}

controller.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const { show, name, unit, amount } = req.body
    await conn().get('products').find({ id }).assign({ show, name, unit, amount }).write()
    res.json({ message: 'Produto alterado' })
  } catch (error) {
    next(error)
  }
}

controller.removeProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    await conn().get('products').remove({ id }).write()
    res.json({ message: 'Produto excluido' })
  } catch (error) {
    next(error)
  }
}

module.exports = controller
