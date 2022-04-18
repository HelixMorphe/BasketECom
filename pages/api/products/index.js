import dbConnect from '../../../util/dbConnect'
import product from '../../../models/product'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  if (method === 'GET') {
    try {
      const products = await product.find()
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ success: false, error: error })
    }
  }
  if (method === 'POST') {
    try {
      const newProduct = await product.create(req.body)
      res.status(200).json(newProduct)
    } catch (error) {
      res.status(500).json({ success: false, error: error })
    }
  }
}
