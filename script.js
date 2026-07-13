let studentName = document.getElementById("name");
let englishMarks = document.getElementById("english");
let mathsMarks = document.getElementById("maths");
let scienceMarks = document.getElementById("science");





function calculateResult() {

    let name  = studentName.value;
    let english = Number(englishMarks.value);
    let maths = Number(mathsMarks.value);
    let science = Number(scienceMarks.value);


   //to check if all forms are filled
    if (studentName.value.trim() === '' || englishMarks.value.trim() === '' || mathsMarks.value.trim() === '' || scienceMarks.value.trim() === '') {
        alert("please fill all fields");
        return;
    }

    //to check if mark is between 0 and 100
    if (english < 0 || english > 100 || maths < 0 || maths > 100 || science < 0 || science > 100) {
        alert("Marks should be between 0 and 100");
        return;
    }
 
    let namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(studentName.value.trim())) {
        alert("Name should contain only letters");
        return;
    }

    let total = english + maths + science;
    let average = total / 3;

    let grade;

    //grade conditions checking
    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else {
        grade = "Fail"; 
    }

    document.getElementById("display-result").style.display = "block";
    document.getElementById("display-result").innerHTML =
        "Student Name: " + name + "<br>" +
        "Total Marks: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade
}

function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("english").value = '';
    document.getElementById('maths').value = '';
    document.getElementById("science").value = '';

    document.getElementById('display-result').innerHTML = "";
    document.getElementById("display-result").style.display = "none";
}