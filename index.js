const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userEmail = form.elements['email'].value; // by name
    const userPassword = form.elements['password'].value;
    const userTable = document.getElementById('user-table');
    const row = userTable.insertRow();
    // const serial = userTable.elements.length;
    console.log(userTable);
    row.innerHTML = `<tr><td> ${userEmail}</><td>${userPassword}</td></tr> `;
});