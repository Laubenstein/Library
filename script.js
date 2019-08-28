const container = document.querySelector("#container");
let my_library = [];

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

function updateBook(element) {
  let bookIndex = element.className.slice(7,8);
  let readStatus = my_library[bookIndex].read;
  if (readStatus) {
    my_library[bookIndex].read = false;
  } else {
    my_library[bookIndex].read = true;
  }
  console.log(my_library[bookIndex].read);
  render();
}

function deleteBook(element) {
  let bookIndex = element.className.slice(7, 8);
  my_library.splice(bookIndex, 1);
  clearTable();
  render();
}

// Just some dummys to fill the table
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1234, false);
addBook("1984", "George Orwell", 234, false);
addBook("The Man in the High castle", "Philip K. Dick", 345, true);

// Main rendering for the table 
// clears old values and puts in all Books from library
function render() {
  clearTable();
  fillTable();
  addUpdateButton();
  addRemoveButton();
}

// Dynamically pushes all Books into the table
// Check for empty inputs!
function fillTable() {
  my_library.forEach(function (e) {
    const values = Object.values(e);
    let table = document.getElementById("table");
    let row = document.createElement('tr');
    row.setAttribute('class', 'bookNum' + my_library.indexOf(e));
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    titleCell.innerHTML = `${values[0]}`;
    authorCell.innerHTML = `${values[1]}`;
    pagesCell.innerHTML = `${values[2]}`;
    table.appendChild(row);
  })
}

function addUpdateButton() {

  for (let i = 0; i < my_library.length; i++) {
    let row = document.querySelector('.bookNum' + i);
    let data = row.insertCell(-1);
    let updateButton = document.createElement('button');
    let readStatus = Object.values(my_library[i])[3];
    updateButton.setAttribute('class', 'updateButton');
    if (readStatus === false) {
      updateButton.innerHTML = 'Unread';
    } else {
      updateButton.innerHTML = 'Read';
    }
    updateButton.addEventListener('click', () => updateBook(row));
    data.appendChild(updateButton);
  }
}
function addRemoveButton() {

  for (let i = 0; i < my_library.length; i++) {
    let row = document.querySelector('.bookNum' + i);
    let data = row.insertCell(-1);
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.innerHTML = 'Remove';
    deleteButton.addEventListener('click', () => deleteBook(row));
    data.appendChild(deleteButton);
   
  }
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

// Check radio buttons
function radioCheck() {
  let readRadio = document.getElementById('readRadio');
  if (readRadio.checked) {
    return true;
   } else {
    return false; 
  }
}
// Push new Book to Library, update table
let submitButton = document.getElementById('submitButton');
submitButton.onclick = function() {
  let titleInput = document.getElementById('titleInput');
  let authorInput = document.getElementById('authorInput');
  let pagesInput = document.getElementById('pagesInput');
  addBook(titleInput.value, authorInput.value, pagesInput.value, radioCheck());
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  render();
}


render();
console.log(my_library);
