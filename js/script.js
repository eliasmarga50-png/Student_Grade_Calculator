
function calculateGrade(mark) {
    if (mark >= 90 && mark <= 100) {
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
const markInput = document.getElementById("mark");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
    const studentName = studentNameInput.value.trim();
    const mark = Number(markInput.value);
    const grade = calculateGrade(mark);
    result.innerText = `${studentName}, received grade ${grade}`;
});

