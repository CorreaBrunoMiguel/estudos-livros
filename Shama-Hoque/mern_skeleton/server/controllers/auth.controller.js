import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import { expressjwt } from 'express-jwt'

import config from './../../config/config'

const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    if (!user.authenticate(req.body.password)) {
      return res.status(401).send({ error: "Email and Password don't match." })
    }

    const token = jwt.sign({ _id: user._id }, config.jwtSecret)
    res.cookie('t', token, { expire: new Date() + 9999 })

    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    })
  } catch (error) {
    return res.status(401).josn({ error: 'Coould not sign in' })
  }
}

const signout = (req, res) => {
  res.clearCookie('t')
  return res.status(200).json({ message: 'signed out' })
}

const requireSignin = expressjwt({
  secret: config.jwtSecret,
  useProperty: 'auth',
  algorithms: ['H256'],
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!authorized) {
    return res.status(403).json({ error: 'User is not authorized' })
  }
  next()
}

export default { signin, signout, requireSignin, hasAuthorization }
