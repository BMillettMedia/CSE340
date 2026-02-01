//start server from terminal
//pnpm run start

//start server in development from terminal
//pnpm run dev

/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
require("dotenv").config()
const routes = require("./src/routes")

const app = express()

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

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
 * Error Handling
 *************************/
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render("src/views/errors/error", {
    title: "Error",
    message: err.message,
  })
})

/* ***********************
 * Server Information
 *************************/
const port = process.env.PORT || 3000
const host = process.env.HOST || "127.0.0.1"

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`)
})
