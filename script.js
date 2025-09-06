
const myLibrary = [];
const dialog = document.getElementById('myDialog');
const closeButton = document.getElementById('closeDialog'); 
const submitButton = document.querySelector('.submit');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const genreInput = document.querySelector('#genre');
function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.uid = crypto.randomUUID();

}

function addBookToLibrary(title, author, genre) {
    let newBook = new Book(title, author, genre);
    myLibrary.push(newBook);

}

function displayLibrary() {

    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = '';
    myLibrary.forEach( (book) => {
        const newBookDiv = document.createElement("div"); 
        newBookDiv.classList.add("card");
        const newBookTitle = document.createElement("h3");
        const newBookAuthor = document.createElement("p");
        const newBookGenre = document.createElement("p");
        const newBookId = document.createElement("p");


        newBookTitle.textContent = book.title;
        newBookAuthor.textContent =  "by " + book.author;
        newBookGenre.textContent = "Genre: " + book.genre;
        newBookId.textContent = "Book Id: " + book.uid;

        newBookDiv.appendChild(newBookTitle);
        newBookDiv.appendChild(newBookAuthor);
        newBookDiv.appendChild(newBookGenre);
        newBookDiv.appendChild(newBookId);
        cardContainer.appendChild(newBookDiv);

        console.log(book);
    });

}

//test code
addBookToLibrary("The Lord of the Rings, Fellowship of the Ring", "J.R.R. Tolkien", "fantasy");
addBookToLibrary("The Lord of the Rings, Fellowship of the Ring", "J.R.R. Tolkien", "fantasy");
addBookToLibrary("The Lord of the Rings, Fellowship of the Ring", "J.R.R. Tolkien", "fantasy");
addBookToLibrary("The Lord of the Rings, Fellowship of the Ring", "J.R.R. Tolkien", "fantasy");
addBookToLibrary("The Lord of the Rings, Fellowship of the Ring", "J.R.R. Tolkien", "fantasy");
addBookToLibrary("The Lord of the Rings, Fellowship of the Ring", "J.R.R. Tolkien", "fantasy");

displayLibrary();

const button = document.querySelector(".button-add-book");
button.addEventListener("click", (event)=> {
    dialog.showModal();
});


closeButton.addEventListener('click', () => {
    dialog.close();
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(titleInput.value);
    addBookToLibrary(titleInput.value, authorInput.value, genreInput.value);
    titleInput.value = '';
    authorInput.value = '';
    genreInput.value = '';
    displayLibrary();
    dialog.close();
})

