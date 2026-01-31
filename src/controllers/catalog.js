const catalogModel = require("../../models/catalog/catalog")

const buildHome = (req, res) => {
  const courses = catalogModel.getAllCourses()

  res.render("catalog/index", {
    title: "Course Catalog",
    courses,
  })
}

module.exports = { buildHome }
