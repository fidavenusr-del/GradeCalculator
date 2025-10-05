function calculateGrade() {
  // Collect marks for 5 subjects
  let subject1 = Number(prompt("Enter marks for Subject 1:"));
  let subject2 = Number(prompt("Enter marks for Subject 2:"));
  let subject3 = Number(prompt("Enter marks for Subject 3:"));
  let subject4 = Number(prompt("Enter marks for Subject 4:"));
  let subject5 = Number(prompt("Enter marks for Subject 5:"));

  // Calculate total and average
  let total = subject1 + subject2 + subject3 + subject4 + subject5;
  let average = total / 5;

  // Determine grade
  let grade = "";
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display results
  alert(

    "Total Marks: " + total + "\n Average Marks: " + average +"\n Grade: " + grade

      );
}