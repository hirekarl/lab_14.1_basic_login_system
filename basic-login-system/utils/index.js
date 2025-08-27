const path = require("path")
require("dotenv").config(path.resolve(__dirname, "../.env"))

const STATIC_ROOT = path.resolve(__dirname, "../public")
const MONGO_URI = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRY = "2h"
const PORT = process.env.PORT

module.exports = { STATIC_ROOT, MONGO_URI, JWT_SECRET, JWT_EXPIRY, PORT }
