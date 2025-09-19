
const myLibrary = [];
const dialog = document.getElementById('myDialog');
const closeButton = document.getElementById('closeDialog'); 
const submitButton = document.querySelector('.submit');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const genreInput = document.querySelector('#genre');
const readInput = document.querySelector('#read');
const cardContainer = document.querySelector(".card-container");

//old factory function way
// function Book(title, author, genre, read) {
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.read = read;
//     this.uid = crypto.randomUUID();

// }

//new class declaration
class Book {
    constructor(title, author, genre, read) {

        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = read;
        this.uid = crypto.randomUUID();

    }
}

function addBookToLibrary(title, author, genre, read) {
    let newBook = new Book(title, author, genre, read);
    myLibrary.push(newBook);

}

function displayLibrary() {
    cardContainer.innerHTML = '';
    myLibrary.forEach( (book) => {
        const newBookDiv = document.createElement("div"); 
        newBookDiv.classList.add("card");
        newBookDiv.dataset.id = book.uid;
        const newBookTitle = document.createElement("h3");
        const newBookAuthor = document.createElement("p");
        const newBookGenre = document.createElement("p");
        const newBookId = document.createElement("p");
        const newBookButtonContainer = document.createElement("div");

        let newBookRead = document.createElement("button");
        let newBookDelete = document.createElement("button");
        newBookDelete.textContent = "Delete";

        newBookTitle.textContent = book.title;
        newBookAuthor.textContent =  "by " + book.author;
        newBookGenre.textContent = "Genre: " + book.genre;
        newBookId.textContent = "Book Id: " + book.uid;
        newBookRead.className = "read-button";
        newBookRead.dataset.id = book.uid;
        newBookDelete.className = "delete-button";
        newBookDelete.dataset.id = book.uid;
        newBookButtonContainer.className = "new-book-button-container";
        if(book.read)
            newBookRead.textContent = "Read";
        else
            newBookRead.textContent = "Unread";
        newBookDiv['data-id'] = book.uid;

        newBookButtonContainer.appendChild(newBookRead);
        newBookButtonContainer.appendChild(newBookDelete);

        newBookDiv.appendChild(newBookTitle);
        newBookDiv.appendChild(newBookAuthor);
        newBookDiv.appendChild(newBookGenre);
        newBookDiv.appendChild(newBookId);

        newBookDiv.appendChild(newBookButtonContainer);
        cardContainer.appendChild(newBookDiv);
    });

}

function deleteBook( uid ) {
    myLibrary.forEach( (book) => {
        if(book.uid === uid ){
            myLibrary.pop(book);
        }
            
    });
    displayLibrary();
}

cardContainer.addEventListener( "click", (event) => {
    if(event.target.classList.contains('delete-button')){
        console.log('delete button pressed');
        deleteBook(event.target.dataset.id);
        displayLibrary();
    } else if ( event.target.classList.contains('read-button')){
        toggleRead(event.target.dataset.id);
        displayLibrary();
    }
})

//test code
addBookToLibrary("The Lord of the Rings, Fellowship of the Ring", "J.R.R. Tolkien", "fantasy", false);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "fantasy", true);

displayLibrary();

function toggleRead(uid) {
    myLibrary.forEach( (book) => {
        if(book.uid === uid){
            if(book.read) {
                book.read = false;
            } else {
                book.read = true;
            }
        }

    });

}

const button = document.querySelector(".button-add-book");
button.addEventListener("click", (event)=> {
    dialog.showModal();
});


closeButton.addEventListener('click', () => {
    dialog.close();
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    console.log( readInput.checked);
    
    addBookToLibrary(titleInput.value, authorInput.value, readInput.checked);
    titleInput.value = '';
    authorInput.value = '';
    genreInput.value = '';
    readInput.checked = false;
    displayLibrary();
    dialog.close();
})

