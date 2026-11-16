

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
const clearFormBtn = document.getElementById("clearFormBtn");
const clearRecordsBtn = document.getElementById("clearRecordsBtn");

const result = document.getElementById("result");
const studentRecords = document.getElementById("studentRecords");


function showEmptyMessage() {
    studentRecords.innerHTML = "";

    const emptyRow = document.createElement("tr");
    emptyRow.id = "emptyMessage";

    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 6;
    emptyCell.textContent = "No student records available yet.";

    emptyRow.appendChild(emptyCell);
    studentRecords.appendChild(emptyRow);
}


function getGradeClass(grade) {
    if (grade.startsWith("A")) {
        return "grade-a";
    } else if (grade.startsWith("B")) {
        return "grade-b";
    } else if (grade === "C") {
        return "grade-c";
    } else if (grade === "D") {
        return "grade-d";
    } else {
        return "grade-f";
    }
}


function addStudentRecord(name, mark1, mark2, mark3, average, grade) {

   
    const emptyMessage = document.getElementById("emptyMessage");

    if (emptyMessage) {
        emptyMessage.remove();
    }

   
    const newRow = document.createElement("tr");

   
    const values = [
        name,
        mark1,
        mark2,
        mark3,
        average.toFixed(2)
    ];

    values.forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        newRow.appendChild(cell);
    });

    
    const gradeCell = document.createElement("td");

    const gradeBadge = document.createElement("span");
    gradeBadge.textContent = grade;
    gradeBadge.className = "grade-badge " + getGradeClass(grade);

    gradeCell.appendChild(gradeBadge);
    newRow.appendChild(gradeCell);

   
    studentRecords.appendChild(newRow);
}


calculateBtn.addEventListener("click", function () {

   
    const studentName = studentNameInput.value.trim();

    const mark1Value = mark1Input.value.trim();
    const mark2Value = mark2Input.value.trim();
    const mark3Value = mark3Input.value.trim();

   
    if (studentName === "") {
        result.textContent = "Please enter the student name.";
        return;
    }


    if (mark1Value === "") {
        result.textContent = "Please enter the Mathematics mark.";
        return;
    }

    if (mark2Value === "") {
        result.textContent = "Please enter the English mark.";
        return;
    }

    if (mark3Value === "") {
        result.textContent = "Please enter the Biology mark.";
        return;
    }


    const mark1 = Number(mark1Value);
    const mark2 = Number(mark2Value);
    const mark3 = Number(mark3Value);

    const marks = [mark1, mark2, mark3];

    for (let i = 0; i < marks.length; i++) {
        if (!Number.isFinite(marks[i]) || marks[i] < 0 || marks[i] > 100) {
            result.textContent =
                "All subject marks must be between 0 and 100.";
            return;
        }
    }

   
    const average = (mark1 + mark2 + mark3) / 3;


    const grade = calculateGrade(average);

  
    result.textContent =
        `${studentName} received grade ${grade}. Average mark: ${average.toFixed(2)}.`;

  
    addStudentRecord(
        studentName,
        mark1,
        mark2,
        mark3,
        average,
        grade
    );

});


clearFormBtn.addEventListener("click", function () {

    studentNameInput.value = "";
    mark1Input.value = "";
    mark2Input.value = "";
    mark3Input.value = "";

    result.textContent = "";

});


clearRecordsBtn.addEventListener("click", function () {

    if (studentRecords.querySelector("tr:not(#emptyMessage)")) {

        const confirmClear = window.confirm(
            "Are you sure you want to delete all student records?"
        );

        if (!confirmClear) {
            return;
        }
    }

    showEmptyMessage();

});


showEmptyMessage();
