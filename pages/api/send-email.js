// pages/api/send-email.js
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const msg = req.body

    try {
      await sgMail.send(msg)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error(error)
      res.status(500).json({ success: false, error })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
