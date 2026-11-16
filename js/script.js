
function calculateGrade(mark) {
    if (mark >= 90) {
        return "A+";
    } else if (mark >= 85) {
        return "A";
    } else if (mark >= 80) {
        return "A-";
    } else if (mark >= 75) {
        return "B+";
    } else if (mark >= 70) {
        return "B";
    } else if (mark >= 65) {
        return "B-";
    } else if (mark >= 60) {
        return "C";
    } else if (mark >= 50) {
        return "D";
    } else {
        return "F";
    }
}

const studentNameInput = document.getElementById("studentName");

const mark1Input = document.getElementById("mark1");
const mark2Input = document.getElementById("mark2");
const mark3Input = document.getElementById("mark3");

const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {

    const studentName = studentNameInput.value.trim();

    const mark1Value = mark1Input.value.trim();
    const mark2Value = mark2Input.value.trim();
    const mark3Value = mark3Input.value.trim();

    if (studentName === "") {
        result.innerText = "Please enter the student name.";
        return;
    }

    if (mark1Value === "") {
        result.innerText = "Please enter the first subject mark.";
        return;
    }

    if (mark2Value === "") {
        result.innerText = "Please enter the second subject mark.";
        return;
    }

    if (mark3Value === "") {
        result.innerText = "Please enter the third subject mark.";
        return;
    }

    const mark1 = Number(mark1Value);
    const mark2 = Number(mark2Value);
    const mark3 = Number(mark3Value);

    if (
        !Number.isFinite(mark1) ||
        !Number.isFinite(mark2) ||
        !Number.isFinite(mark3)
    ) {
        result.innerText = "Please enter valid numbers for all subjects.";
        return;
    }


    if (mark1 < 0 || mark1 > 100) {
        result.innerText = "First subject mark must be between 0 and 100.";
        return;
    }

    if (mark2 < 0 || mark2 > 100) {
        result.innerText = "Second subject mark must be between 0 and 100.";
        return;
    }

    if (mark3 < 0 || mark3 > 100) {
        result.innerText = "Third subject mark must be between 0 and 100.";
        return;
    }


    const average = (mark1 + mark2 + mark3) / 3;

    
    const grade = calculateGrade(average);

    result.innerText =
        `${studentName} received grade ${grade}. Average mark: ${average.toFixed(2)}.`;
});
