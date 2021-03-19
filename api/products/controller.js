const { nanoid } = require('nanoid')
const { conn } = require('../db')

const controller = {}

controller.getProducts = async (req, res) => {
  const products = await conn().get('products').sortBy('name').value()
  res.json(products)
}

controller.getProduct = async (req, res) => {
  const { id } = req.params
  const product = await conn().get('products').find({ id }).value()
  res.json(product)
}

controller.createProduct = async (req, res) => {
  const { show, name, unit, amount } = req.body
  const newProduct = { id: nanoid(), show, name, unit, amount: parseFloat(amount.replace(',', '.')) }
  await conn().get('products').push(newProduct).write()
  res.status(200).json({ message: 'Produto criado' })
}

controller.updateProduct = async (req, res) => {
  const { id } = req.params
  const { show, name, unit, amount } = req.body
  const value = parseFloat(amount).toFixed(2)
  await conn().get('products').find({ id }).assign({ show, name, unit, amount: value }).write()
  res.json({ message: 'Produto alterado' })
}

controller.removeProduct = async (req, res) => {
  const { id } = req.params
  await conn().get('products').remove({ id }).write()
  res.json({ message: 'Produto excluido' })
}

module.exports = controller
