/*
In this mini project, you will get to review JavaScript fundamentals like
functions, variables, conditionals and more by building a gradebook app.

This will give you an opportunity to solve small problems and get a better
understanding of the basics.

---

Step 1️⃣.

A teacher has finished grading their students' tests and needs your help to
calculate the average score for the class.

Complete the getAverage function which takes in an array of test scores
and returns the average score.

The average is calculated by adding up all the scores and dividing
by the total number of scores.
 */

function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

/*
Step 2️⃣.

Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter.
Your function should return a string representing a letter grade based on the score.
*/

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

/*
A SUPERCOOL way to do this ↑, with destructuring:

function getGrade(score) {
    gradeTable = [
    {min: undefined, max: 100, grade: "A++"},
    {min: 90, max: 99, grade: "A"},
    {min: 80, max: 89, grade: "B"},
    {min: 70, max: 79, grade: "C"},
    {min: 60, max: 69, grade: "D"},
    {min: 0, max: 59, grade: "F"}
    ]
    for (const { min, max, grade} of gradeTable) {
    if (score >= min && score <= max) {
        return grade;
    }
    }
}

---

Step 3️⃣.

The teacher is really happy with the program you have created so far.
But now they want to have an easy way to check if a student has a passing grade.
A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter.
Your function should return true if the student has a passing grade and false if they do not.
*/

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

/*
Step 4️⃣.

Now that the teacher has all of the information they need, 
they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters.
The function should return a string representing a message to the student.
*/

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let studentGrade = getGrade(studentScore);
    if (studentScore >= average) {
        return "Class average: " + average + ". Your grade: " + studentGrade + ". You passed the course."
    } else {
        return "Class average: " + average + ". Your grade: " + studentGrade + ". You failed the course."
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Output: Class average: 71.7. Your grade: F. You failed the course.

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// Output: Class average: 50.8. Your grade: A++. You passed the course.

console.log(studentMsg([65, 72, 81, 90, 78, 75, 82, 69, 80, 77], 85));
// Output: Class average: 76.9. Your grade: B. You passed the course.

console.log(studentMsg([98, 95, 92, 91, 94, 93, 96, 97, 90, 99], 93));
// Output: Class average: 94.5. Your grade: A. You failed the course.

console.log(studentMsg([50, 45, 60, 55, 48, 52, 49, 51, 53, 54], 52));
// Output: Class average: 51.7. Your grade: F. You passed the course.

console.log(studentMsg([70, 70, 70, 70, 70, 70, 70, 70, 70, 70], 70));
// Output: Class average: 70. Your grade: C. You passed the course.

console.log(studentMsg([100, 0, 100, 0, 100, 0, 100, 0, 100, 0], 100));
// Output: Class average: 50. Your grade: A++. You passed the course.

console.log(studentMsg([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 35));
// Output: Class average: 55. Your grade: F. You failed the course.

console.log(studentMsg([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 99));
// Output: Class average: 94.5. Your grade: A. You passed the course.

console.log(studentMsg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// Output: Class average: 5.5. Your grade: F. You failed the course.

console.log(studentMsg([85, 80, 75, 70, 65, 60, 55, 50, 45, 40], 82));
// Output: Class average: 62.5. Your grade: B. You passed the course.

console.log(studentMsg([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 95));
// Output: Class average: 100. Your grade: A. You failed the course.