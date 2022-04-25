import dbConnect from '../../../../../util/dbConnect'
import User from '../../../../../models/User'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()

  if (method === 'POST') {
    try {
      const user = await User.findOneAndUpdate({ username: req.query.user })
      user.cart.push(req.query.cart)
      await user.save()
      res.status(200).json(req.query.cart)
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
}
