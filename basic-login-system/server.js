const express = require("express")

const connect = require("./db/connect")
const userRoutes = require("./routes/userRoutes")

const { STATIC_ROOT, PORT } = require("./utils")

const run = async () => {
  await connect()

  const app = express()

  app.use(express.static(STATIC_ROOT))
  app.use(express.json())
  app.use("/api/users", userRoutes)

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}.`)
  })
}

run()
