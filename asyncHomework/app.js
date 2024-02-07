console.log("Hello");
const STUDENT_API =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const fetchStudents = async () => {
  try {
    const res = await fetch(STUDENT_API);
    const data = await res.json();
    console.log(data);
    printStudentsInfo(data);
  } catch (error) {
    console.error(error);
  }
};

const printStudentsInfo = (students) => {
  // Show the average age and average grade of all students combined
  const studentsAverageGrade = students.map((student) => student.averageGrade);
  const studentsAverageAge = students.map((student) => student.age);
  const averageAge =
    studentsAverageAge.reduce((acc, age) => acc + age, 0) /
    studentsAverageAge.length;
  console.log(averageAge);
  const averageGrade =
    studentsAverageGrade.reduce((acc, studentGrade) => acc + studentGrade, 0) /
    studentsAverageGrade.length;
  console.log(averageGrade);
  // Show the number of students that are over 60 and the number of students that are under 30 years old

  const studentUnderThirty = students
    .map((student) => student.age < 30)
    .reduce((acc, student) => acc + student, 0);
  console.log(studentUnderThirty);
  const studentsOverSixty = students
    .map((student) => student.age > 60)
    .reduce((acc, student) => acc + student, 0);
  console.log(studentsOverSixty);
  // Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above

  const studentsFirstLastName = students
    .filter((student) => student.age > 30 && student.averageGrade > 4)
    .map(
      (student) =>
        ` First Name:  ${student.firstName} Last Name:   ${student.lastName} City: ${student.city}`
    );
  const userList = document.querySelector(".firstName-list");
  userList.innerHTML =
    `<h1>Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above</h1>` +
    studentsFirstLastName
      .map(
        (student) => `
    <li><h4>${student}</h4></li>`
      )
      .join("");

  console.log(studentsFirstLastName);
  // Find the student named Arthur Cadore and display all of his information
  const studentArthur = students.filter(
    (student) => student.firstName === "Arthur" && student.lastName === "Cadore"
  );

  const arthurInfo = studentArthur.map(
    (student) => `<strong>ID</strong>: ${student.id};
       <strong>Age</strong>: ${student.age};
        <strong>Average Grade</strong>: ${student.averageGrade};
        <strong>City</strong>: ${student.city}
        <strong>Email</strong>: ${student.email};
        <strong>Gender</strong>: ${student.gender}`
  );
  console.log(arthurInfo);

  console.log(studentArthur);
  // Find the oldest and youngest student and display their information on the screen
  const youngestStudent = studentsAverageAge.reduce((acc, age) =>
    Math.min(acc, age)
  );
  console.log(youngestStudent);
  const oldestStudent = studentsAverageAge.reduce((acc, age) =>
    Math.max(acc, age)
  );
  console.log(oldestStudent);
  // Show a list of the full names of students that have a last name longer than 8 characters
  const lastNameLongerThanEightChars = students
    .filter((student) => student.lastName.length > 8)
    .map(
      (student) =>
        `First Name: ${student.firstName} Last Name: ${student.lastName}`
    );
  const longerThanEightEl = document.querySelector(".longerThanEight");
  longerThanEightEl.innerHTML =
    `<h1>Show a list of the full names of students that have a last name longer than 8 characters</h1>` +
    lastNameLongerThanEightChars
      .map((student) => `<li><h4>${student}</h4></li>`)
      .join("");
  console.log(lastNameLongerThanEightChars);
  const studentCopy = students.map((student) => student);
  // Show a list of the top 10 best students by average grade
  const topTenStudents = studentCopy
    .sort(
      (firstItem, secondItem) =>
        secondItem.averageGrade - firstItem.averageGrade
    )
    .slice(0, 10)
    .map(
      (student) =>
        `First Name: ${student.firstName} Last Name: ${student.lastName}`
    );
  const topTenEl = document.querySelector(".topTen");
  topTenEl.innerHTML =
    `<h1>Top Ten Students</h1>` +
    topTenStudents.map((student) => `<li><h4>${student}</h4></li>`).join("");
  console.log(topTenStudents);
  // Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
  const averageGradeOne = students.some(
    (student) => student.averageGrade === 1
  );
  const areAllAdults = students.every((student) => student.age > 18);
  console.log(areAllAdults);
  console.log(averageGradeOne);
  const usersListEl = document.querySelector(".user-list");
  usersListEl.innerHTML = `   
  <h1>Homework</h1>
  <h3> Students Average Age: ${averageAge}</h3>
  <h3> Students Average Age: ${averageGrade}</h3>
  <h3> Students under 30 years old : ${studentUnderThirty}</h3>
  <h3> Students over 60 years old : ${studentsOverSixty}</h3>
  <h3>Arthur Cadore Info </br>${arthurInfo}</h3>
  <h3>Youngest student is ${youngestStudent} old</h3>
  <h3>Oldest student is ${oldestStudent} old</h3>
  <h3>Some users have average grade of 1: ${averageGradeOne}</h3>
  <h3>All users are adults: ${areAllAdults}</h3>


  `;

  console.log(studentCopy);
};

fetchStudents();
