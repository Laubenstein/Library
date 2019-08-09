const container = document.querySelector("#container");
let my_library = [];
let createRow;
let tableData;

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

// Just for testing
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1234, false);
addBook("1984", "George Orwell", 234, false);
addBook("The Man in the High castle", "Philip K. Dick", 345, true);

function render() {
  fillTable();
}

function fillTable() {
  my_library.forEach(function (e) {
    const values = Object.values(e);
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let statusCell = row.insertCell(3);
    titleCell.innerHTML = `${values[0]}`;
    authorCell.innerHTML = `${values[1]}`;
    pagesCell.innerHTML = `${values[2]}`;
    statusCell.innerHTML = `${values[3]}`;
  })
}



render();
console.log(my_library);
