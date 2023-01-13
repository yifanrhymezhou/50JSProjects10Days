//Add a Notes
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    addNewNotes();
});

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach(notes => {
        addNewNotes();
    })
};

function addNewNotes(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = (`
    <div class="notes"> 
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
    </div>`)
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');

    textarea.value = text;

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        updateStorage();
    });
    
    textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);
        localStorage.setItem('notes', value);
    });
    
    deleteBtn.addEventListener('click', (e) => {
        const removed = e.target;
        note.remove(removed);
        updateStorage();
    });
    document.body.appendChild(note);
    updateStorage();
}

function updateStorage() {
    const notesText = document.querySelectorAll('textarea');
    const notes = []; 
    notesText.forEach(note => {
        notes.push(note);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
};