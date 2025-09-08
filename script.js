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

