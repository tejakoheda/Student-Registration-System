// get form and tbody
const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

// Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("studentName").value;
    let id = document.getElementById("studentID").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

 //  validation on empty fields
    if (name === "" || id === "" || email === "" || contact === "") {
        alert("All fields are required!");
        return;
    }

// Add new row to table
    let row = tableBody.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerText = name;
    cell2.innerText = id;
    cell3.innerText = email;
    cell4.innerText = contact;
    
// Edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        document.getElementById("studentName").value = cell1.innerText;
        document.getElementById("studentID").value = cell2.innerText;
        document.getElementById("email").value = cell3.innerText;
        document.getElementById("contact").value = cell4.innerText;
        row.remove(); 
    };

     // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        row.remove();
    };

    // Add buttons to last cell
    cell5.appendChild(editBtn);
    cell5.appendChild(delBtn);

    // Reset form
    form.reset();


});