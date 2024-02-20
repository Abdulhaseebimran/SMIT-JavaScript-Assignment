// 1. Create a signup form and display form data in your web
// page on submission.

function signUp() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = "<h3>User Data:</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Password:</strong> " + password + "</p>" +
        "<p><strong>Confirm Password:</strong> " + confirmPassword + "</p>";
}


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    addStudentToTable(name, age, course);
});

function addStudentToTable(name, age, course) {
    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = course;
    cell4.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';
}

function deleteStudent(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editStudent(btn) {
    const row = btn.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const name = cells[0].textContent;
    const age = cells[1].textContent;
    const course = cells[2].textContent;

    document.getElementById('name').value = name;
    document.getElementById('age').value = age;
    document.getElementById('course').value = course;
}