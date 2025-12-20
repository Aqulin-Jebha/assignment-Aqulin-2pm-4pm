let StudentName = "Akshi";
let marks = 82;
let grade, remark;

if (marks >= 90) {
  grade = "A+";
  remark = "Excellent";
} else if (marks >= 80) {
  grade = "A";
  remark = "Very Good";
} else if (marks >= 70) {
  grade = "B+";
  remark = "Good";
} else if (marks >= 60) {
  grade = "B";
  remark = "Average";
} else if (marks >= 50) {
  grade = "C";
  remark = "Needs Improvement";
} else {
  grade = "F";
  remark = "Fail";
}

console.log("Name:", StudentName);
console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Remark:", remark);
