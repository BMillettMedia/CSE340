/* ******************************************
 * server.js
 ******************************************/

const express = require("express")
const expressLayouts = require("express-ejs-layouts")
require("dotenv").config()
const path = require("path")

const routes = require("./src/routes")

const app = express()

/* ***********************
 * View Engine Setup
 *************************/

app.set("view engine", "ejs")

// IMPORTANT: tell Express where views are located
app.set("views", path.join(__dirname, "src", "views"))

app.use(expressLayouts)

// layout file WITHOUT extension and WITHOUT views/
app.set("layout", "layouts/layout")

/* ***********************
 * Middleware
 *************************/

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

/* ***********************
 * Routes
 *************************/

app.use("/", routes)

/* ***********************
 * Error Handler
 *************************/

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(err.status || 500)

  // FIXED: remove "views/"
  res.render("errors/error", {
    title: "Server Error",
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err : {}
  })
})

/* ***********************
 * Server
 *************************/

const port = process.env.PORT || 5500
const host = process.env.HOST || "localhost"

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`)
})
