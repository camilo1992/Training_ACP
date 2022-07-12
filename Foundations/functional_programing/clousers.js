// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array,
// to studentFeedback (as shown in comments below)

const studentGrades = [
  { name: "Joe", grade: 88 },
  { name: "Jen", grade: 94 },
  { name: "Steph", grade: 77 },
  { name: "Allen", grade: 60 },
  { name: "Gina", grade: 54 },
];

const studentFeedback = {
  A: " Excellent Job",
  B: " Nice job",
  C: " Well done",
  D: " What happened",
  F: " Not good ",
};

const assess = function (grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const messages = studentGrades.map((student) => {
  let grade = assess(student.grade);

  return console.log(
    `${studentFeedback[grade]} ${student.name}, you got a ${grade}`
  );
});

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console
