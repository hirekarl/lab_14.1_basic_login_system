const path = require("path")
require("dotenv").config(path.resolve(__dirname, "../.env"))

const MONGO_URI = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET
const PORT = process.env.PORT

module.exports = { MONGO_URI, JWT_SECRET, PORT }
