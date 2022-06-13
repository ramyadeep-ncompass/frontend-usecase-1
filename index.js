const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fName = form.elements['fname'].value;
    const lName = form.elements['lname'].value;
    const userEmail = form.elements['email'].value;
    const userPassword = form.elements['password'].value;
    const userTable = document.getElementById('user-table');
    const row = userTable.insertRow();
    const serial = userTable.rows.length;
    console.log(userTable);
    row.innerHTML = `<tr><td>${serial-1}. ${fName}</><td>${lName}</td><td> ${userEmail}</><td>${userPassword}</td></tr> `;
});