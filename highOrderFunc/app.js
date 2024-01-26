// This way of fetching I found on google ...
document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  )
    .then((response) => response.json())
    .then((data) => {
      // - All students with an average grade higher than 3
      const filteredStudents = data.filter(
        (student) => student.averageGrade > 3
      );
      // - All female student names with an average grade of 5
      const femaleStudents = data.filter(
        (student) => student.gender === "Female" && student.averageGrade >= 5
      );
      // - All male student full names who live in Skopje and are over 18 years old
      const maleStudents = data
        .filter((student) => student.city === "Skopje" && student.age > 18)
        .map((student) => `${student.firstName} ${student.lastName}`);
      // - The average grades of all female students over the age of 24
      const femaleStudentsGrades = data
        .filter((student) => student.age > 24 && student.gender === "Female")
        .map((student) => `${student.averageGrade}`);
      // - All male students with a name starting with B and average grade over 2
      const maleStudentsNameWithB = data.filter(
        (student) =>
          student.firstName[0] === "B" &&
          student.averageGrade > 2 &&
          student.gender === "Male"
      );

      console.log(filteredStudents);
      console.log(femaleStudents);
      console.log(maleStudents);
      console.log(femaleStudentsGrades);
      console.log(maleStudentsNameWithB);
    });
});

// This is the way of fetching data that we learned for now...
const studentApi =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
const fetchStudentApi = (studentApi) => {
  fetch(studentApi)
    .then((res) => res.json())
    .then((data) => {
      // - All students with an average grade higher than 3
      const filteredStudents = data.filter(
        (student) => student.averageGrade > 3
      );
      // - All female student names with an average grade of 5
      const femaleStudents = data.filter(
        (student) => student.gender === "Female" && student.averageGrade >= 5
      );
      // - All male student full names who live in Skopje and are over 18 years old
      const maleStudents = data
        .filter((student) => student.city === "Skopje" && student.age > 18)
        .map((student) => `${student.firstName} ${student.lastName}`);
      // - The average grades of all female students over the age of 24
      const femaleStudentsGrades = data
        .filter((student) => student.age > 24 && student.gender === "Female")
        .map((student) => `${student.averageGrade}`);
      // - All male students with a name starting with B and average grade over 2
      const maleStudentsNameWithB = data.filter(
        (student) =>
          student.firstName[0] === "B" &&
          student.averageGrade > 2 &&
          student.gender === "Male"
      );

      console.log(filteredStudents);
      console.log(femaleStudents);
      console.log(maleStudents);
      console.log(femaleStudentsGrades);
      console.log(maleStudentsNameWithB);
    });
};

fetchStudentApi(studentApi);
