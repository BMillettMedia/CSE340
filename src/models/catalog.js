const courses = [
  {
    id: "cse340",
    name: "Web Backend Development",
    description: "Learn backend development with Node and Express.",
  },
  {
    id: "cse210",
    name: "Programming with Classes",
    description: "Object-oriented programming concepts.",
  },
  {
    id: "cse110",
    name: "Introduction to Programming",
    description: "Programming fundamentals.",
  },
]

const getAllCourses = () => {
  return courses
}

module.exports = { getAllCourses }
