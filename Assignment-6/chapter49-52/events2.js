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

function expandText() {
    let shortText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, amet?";
    let fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    let text = document.getElementById("text");
    let changeText = document.getElementById("changeText");
    if (text.innerHTML === shortText) {
        text.innerHTML = fullText;
        changeText.innerHTML = 'Read less';
    } else {
        text.innerHTML = shortText;
        changeText.innerHTML = 'Read more';
    }
}


// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


function addStudent() {
    var name = document.getElementById('name').value;
    var rollNo = document.getElementById('rollNo').value;
    var table = document.getElementById('studentsTable');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = rollNo;
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell3.innerHTML = "<button onclick='deleteStudent(this)'>Delete</button>";
    cell4.innerHTML = "<button onclick='editStudent(this)'>Edit</button>";
    document.getElementById('name').value = '';
    document.getElementById('rollNo').value = '';
}

function deleteStudent(e) {
    e.parentNode.parentNode.remove();
}

function editStudent(e) {
    var name = e.parentNode.parentNode.firstChild.innerHTML;
    var rollNo = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    document.getElementById('editName').value = name;
    document.getElementById('editRollNo').value = rollNo;
    document.getElementById('editForm').style.display = 'block';
    e.parentNode.parentNode.remove();
}

function updateStudent() {
    var name = document.getElementById('editName').value;
    var rollNo = document.getElementById('editRollNo').value;
    var table = document.getElementById('studentsTable');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = rollNo;
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell3.innerHTML = "<button onclick='deleteStudent(this)'>Delete</button>";
    cell4.innerHTML = "<button onclick='editStudent(this)'>Edit</button>";
    document.getElementById('editForm').style.display = 'none';
    document.getElementById('editName').value = '';
    document.getElementById('editRollNo').value = '';
}