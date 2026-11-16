
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

const calculateBtn = document.getElementById("calculateBtn");

const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {

    const studentName = studentNameInput.value.trim();
    const mark1Value = mark1Input.value.trim();
    const mark2Value = mark2Input.value.trim();

  
    if (studentName === "") {
        result.innerText = "Please enter the student name.";
        return;
    }

 
    if (mark1Value === "") {
        result.innerText = "Please enter the first subject mark.";
        return;
    }

    // Validate second subject mark
    if (mark2Value === "") {
        result.innerText = "Please enter the second subject mark.";
        return;
    }


    const mark1 = Number(mark1Value);
    const mark2 = Number(mark2Value);

  
    if (mark1 < 0 || mark1 > 100) {
        result.innerText = "First subject mark must be between 0 and 100.";
        return;
    }

  
    if (mark2 < 0 || mark2 > 100) {
        result.innerText = "Second subject mark must be between 0 and 100.";
        return;
    }

    
    const average = (mark1 + mark2) / 2;

    
    const grade = calculateGrade(average);

    
    result.innerText =
        `${studentName} received grade ${grade}. Average mark: ${average.toFixed(2)}.`;
});
