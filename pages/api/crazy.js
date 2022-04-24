export default function handler(req, res) {
  const { method } = req

  if (method === 'GET') {
    try {
      res.status(200).json({ name: 'Santhosh' })
    } catch (error) {
      res.status(500).json({ success: false })
    }
  }
}
