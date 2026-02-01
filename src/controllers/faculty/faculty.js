const facultyModel = require("../../models/faculty/faculty")

const facultyListPage = (req, res) => {
  const sort = req.query.sort || "name"
  const faculty = facultyModel.getSortedFaculty(sort)

  res.render("faculty/list", {
    title: "Faculty Directory",
    faculty,
    sort,
  })
}

const facultyDetailPage = (req, res, next) => {
  const facultyId = req.params.facultyId
  const faculty = facultyModel.getFacultyById(facultyId)

  if (!faculty) {
    const err = new Error("Faculty member not found")
    err.status = 404
    return next(err)
  }

  res.render("faculty/detail", {
    title: faculty.name,
    faculty,
  })
}

module.exports = { facultyListPage, facultyDetailPage }
