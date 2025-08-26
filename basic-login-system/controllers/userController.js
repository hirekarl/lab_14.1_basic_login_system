const User = require("../models/User")

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const foundUser = User.findOne({ email: email })

    if (foundUser) {
      res
        .status(409)
        .json({ error: `User with email ${email} already exists.` })
    } else {
      const newUser = await User.create({
        username: username,
        email: email,
        password: password,
      })

      const newUserWithoutPassword = await User.findById(newUser._id).select(
        "-password"
      )

      res.status(201).json(newUserWithoutPassword)
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: message })
  }
}

const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
}

module.exports = { register, login }
