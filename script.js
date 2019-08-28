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

// Create Book and push to Library
function addBook(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  my_library.push(newBook);
}

// Delete Book from Library
/*  myLibrary.forEach(element => {
    let newRow = document.createElement('tr');
    newRow.setAttribute('class', 'book_' + myLibrary.indexOf(element));
*/



/* 
function addRemoveButton() {
  let amount = myLibrary.length;

  for (let i = 0; i < amount; i++) {
    let tableRow = document.querySelector('.book_' + i);
    let makeTD = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.value = 'Remove';
    deleteButton.addEventListener('click', () => deleteBook(tableRow));
    makeTD.appendChild(deleteButton);
    tableRow.appendChild(makeTD);
  }
}

function deleteBook(element) {
  let bookIndex = element.className.slice(5, 6);

  myLibrary.splice(bookIndex, 1);
  clearTable();
  render();
}
*/
function deleteBook() {
  my_library.splice(i, 1);
  render();
}

// Just for testing
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1234, false);
addBook("1984", "George Orwell", 234, false);
addBook("The Man in the High castle", "Philip K. Dick", 345, true);

// Main rendering for the table 
// clears old values and puts in all Books from library
function render() {
  clearTable();
  fillTable();
}

// Dynamically pushes all Books into the table
// Better use my_library.forEach((book)=>book.title...)
// Check for empty inputs!
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

// Clears the table, but not the Heading
function clearTable () {
  let table = document.getElementById('table');
  while (table.rows.length > 1 ) {
    table.deleteRow(-1);
  }
}


// Open "Add Book" modal
let addModal = document.getElementById('addModal');
let addButton = document.getElementById('addButton');
let cancelButton = document.getElementById('cancelButton');
addButton.onclick = function() {
  addModal.style.display = "block";
}
cancelButton.onclick = function() {
  addModal.style.display = "none";
}


let titleInput = document.getElementById('titleInput');
let authorInput = document.getElementById('authorInput');
let pagesInput = document.getElementById('pagesInput');
let submitButton = document.getElementById('submitButton');
let readRadio = document.getElementById('readRadio');
let unreadRadio = document.getElementById('unreadRadio');
// Check radio buttons
function radioCheck() {
  if (readRadio.checked) {
    return true;
   } else {
    return false; 
  }
}
// Push new Book to Library, update table
submitButton.onclick = function() {
  addBook(titleInput.value, authorInput.value, pagesInput.value, radioCheck());
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  render();
}


render();
console.log(my_library);
