import dbConnect from '../../../../../util/dbConnect'
import User from '../../../../../models/User'

export default async function handler(req, res) {
  const { method } = req
  console.log(req.query.cart)
  await dbConnect()
  if (method === 'GET') {
    try {
      const user = await User.findOne({ username: req.query.user })
      res.status(200).json(user.cart)
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
  if (method === 'GET') {
    try {
      // const user = await User.findOne({ username: req.query.user })
      res.status(200).json(req.query.cart)
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
}
