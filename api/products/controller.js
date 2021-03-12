const { v4 } = require('uuid')
const { conn } = require('../db')

const controller = {}

controller.getProducts = async (req, res) => {
  const products = await conn().get('products').value()
  res.status(200).json(products)
}

controller.getProduct = async (req, res) => {
  const { id } = req.params
  const product = await conn().get('products').find({ id }).value()
  res.json(product)
}

controller.createProduct = async (req, res) => {
  const { show, name, unit, amount } = req.body
  const newProduct = { id: v4(), show, name, unit, amount }
  await conn().get('products').push(newProduct).write()
  res.json({ message: 'Produto criado' })
}

controller.updateProduct = async (req, res) => {
  const { id } = req.params
  const { show, name, unit, amount } = req.body
  await conn().get('products').find({ id }).assign({ show, name, unit, amount }).write()
  res.json({ message: 'Produto alterado' })
}

controller.removeProduct = async (req, res) => {
  const { id } = req.params
  await conn().get('products').remove({ id }).write()
  res.json({ message: 'Produto removido' })
}

module.exports = controller
