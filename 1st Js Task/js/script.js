let score = Number(prompt("Enter your score:"));

// Validate input
if (isNaN(score)) {
  console.log("Please enter a valid number.");
} else {
  // Grading logic
  if (score > 90) {
    console.log("A");
  } else if (score <= 90 && score > 80) {
    console.log("B");
  } else if (score <= 80 && score > 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}





// >90 ==> A
// 80 : 90 ==> B
// 70 : 80 ==> D
// <70 ==> f