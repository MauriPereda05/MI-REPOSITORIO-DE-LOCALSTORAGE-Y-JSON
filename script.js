const form = document.getElementById('FormElement');
const notesTableBody = document.getElementById('notesTableBody');
const notes = JSON.parse(localStorage.getItem('notes'));

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
    const title = titleInput.value;
    const content = contentInput.value;
    notes.push({ title, content });
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
});

function displayNotes() {
    notesTableBody.innerHTML = '';
    notes.forEach((note, borrar) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${note.title}</td>
            <td>${note.content}</td>
            <td><button style="margin-left: 150px; margin-top: 2%;">Eliminar</button></td>
        `;
        row.querySelector('button').addEventListener('click', () => deleteNote(borrar));
        notesTableBody.appendChild(row);
    });
}

function deleteNote(borrar) {
    notes.splice(borrar, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

displayNotes();





