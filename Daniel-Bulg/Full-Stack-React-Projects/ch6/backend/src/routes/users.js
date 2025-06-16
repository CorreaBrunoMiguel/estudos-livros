import { createUser } from '../services/users.js'

export function userRoutes(app) {
  app.post('/api/v1/user/signup', async (req, res) => {
    try {
      const user = await createUser(req.body)
      return res.status(201).json({ username: user.username })
    } catch (error) {
      return res.status(400).json({
        error: 'Failed to create the user, does the username already exist?',
      })
    }
  })
}
