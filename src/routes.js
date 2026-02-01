const express = require("express")
const router = express.Router()

/* Controllers */
//const catalogController = require("./controllers/catalog/catalog")
const facultyController = require("./controllers/faculty/faculty")

/* Home Route */
router.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})

/* Faculty Directory */
router.get("/faculty", facultyController.facultyListPage)
router.get("/faculty/:facultyId", facultyController.facultyDetailPage)

module.exports = router
