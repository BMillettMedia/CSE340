/* ******************************************
 * index.js
 * Main route file
 *******************************************/

const express = require("express")
const router = express.Router()

/* ******************************************
 * Home route
 *******************************************/
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home"
  })
})

/* ******************************************
 * Example inventory route (optional)
 *******************************************/
router.get("/inventory", (req, res) => {
  res.render("inventory/index", {
    title: "Inventory"
  })
})

/* ******************************************
 * Trigger error route for testing
 *******************************************/
router.get("/error", (req, res, next) => {
  const err = new Error("Intentional test error")
  err.status = 500
  next(err)
})

module.exports = router
