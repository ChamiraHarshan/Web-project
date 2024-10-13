document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const isActive = document.getElementById('isActive').checked ? 1 : 0;

    addUserToTable(name, age, isActive);
    document.getElementById('userForm').reset();

    alert("User added successfully!");
});

function addUserToTable(name, age, isActive) {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = table.rows.length;
    cell2.textContent = name;
    cell3.textContent = age;
    cell4.textContent = isActive;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editRow(newRow, name, age, isActive);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteRow(newRow);

    cell5.appendChild(editBtn);
    cell5.appendChild(deleteBtn);
}

function editRow(row, name, age, isActive) {
    document.getElementById('name').value = name;
    document.getElementById('age').value = age;
    document.getElementById('isActive').checked = isActive === 1;
    row.remove();

    alert("User is ready for editing. Make changes and submit.");
}

function deleteRow(row) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        row.remove();
        alert("User deleted successfully!");
    }
}
