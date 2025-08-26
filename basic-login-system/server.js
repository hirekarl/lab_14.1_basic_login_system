const express = require("express")

const connect = require("./db/connect")
const userRoutes = require("./routes/userRoutes")

const PORT = require("./utils")

const app = express()

app.use(express.json())

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}.`)
})

connect()
