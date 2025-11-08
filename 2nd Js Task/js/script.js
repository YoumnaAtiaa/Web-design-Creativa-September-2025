const courses = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

function findCourse() {
  const input = prompt("Enter course name:")
  if (!input) {
    console.log("undefined")
    return
  }

  const found = courses.find(c => c.toLowerCase().includes(input.toLowerCase()))

  if (found) {
    console.log("Course found:", found)
  } else {
    console.log("Not found")
  }
}

findCourse()