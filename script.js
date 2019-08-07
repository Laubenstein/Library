const container = document.querySelector("#container");
let my_library = [];
let createDiv;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  my_library.push(newBook);
}

addBook("LOTR", "J.R.R. Tolkien", 1234, false);
addBook("1984", "George Orwell", 234, false);
addBook("The Man in the High castle", "Philip K. Dick", 345, true);

function render() {
  my_library.forEach(function (e) {
    createDiv = document.createElement("p");
    createDiv.textContent = `Title: ${e.title}, Author: ${e.author}, Pages: ${e.pages}, read: ${e.read}`;
    createDiv.classList.add("bookPara");
    container.appendChild(createDiv);
  })
}

let addButton = document.createElement("button");
container.appendChild(addButton);
render();
console.log(my_library);