// // Initialize a constructor function for a new book
// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//   }

// Book.prototype.info = function() {
//     return `"${this.title}" by ${this.author}, ${this.pages}, ${this.read}`
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')

// //console.log(theHobbit.info());
// // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//   }

// function addBookToLibrary() {
// }

let myLibrary = [];

const addBook = (event) =>{
  event.preventDefault();

  let book = {
    id: Date.now(),
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    pages: document.querySelector("#pages").value,
    read: document.querySelector("input[name=read]:checked").value,
  }

  myLibrary.push(book)
  console.log(myLibrary);
  document.querySelector("form").reset()

  booklist()
}

document.querySelector("#submit").addEventListener('click', addBook)

function booklist(){

  //if quantity of divs do not match the quantity of items in the array, delete the whole div, and re-create the booklist
  if(document.querySelectorAll(".item").length != myLibrary.length){

    document.querySelector("#booklist").innerHTML = "";

    myLibrary.forEach(element => {
  
      const el = document.createElement('div');
      // el.textContent = "ID: book" + element.id;
      el.id = `book${element.id}`;
      el.classList.add('item');
      document.querySelector('#booklist').appendChild(el);

      const title = document.createElement('div');
      title.textContent = "Title: " + element.title;
      document.querySelector(`#book${element.id}`).appendChild(title);
      
      const author = document.createElement('div');
      author.textContent = "Author: " + element.author;
      document.querySelector(`#book${element.id}`).appendChild(author);

      const pages = document.createElement('div');
      pages.textContent = "Pages: " + element.pages;
      document.querySelector(`#book${element.id}`).appendChild(pages);

      const readcontainer = document.createElement('div');
      readcontainer.textContent = "Read: "; //+ element.read;
      readcontainer.id = `read${element.id}`;
      document.querySelector(`#book${element.id}`).appendChild(readcontainer);

      // <input type="radio" name="read" value="yes">
			// <label for="readyes">Yes</label>

			// <input type="radio" name="read" value="no">
			// <label for="readnoo">No</label>

      const readyes = document.createElement('input');
      readyes.setAttribute('type', 'radio');
      readyes.setAttribute('name', `answer${element.id}`);
      readyes.setAttribute('value', 'yes');
      readyes.classList.add('radioclass');
      readyes.id = `readyes${element.id}`;
      document.querySelector(`#read${element.id}`).appendChild(readyes);

      const readyeslabel = document.createElement('label');
      readyeslabel.setAttribute('for', 'readyes');
      readyeslabel.textContent = "Yes";
      document.querySelector(`#read${element.id}`).appendChild(readyeslabel);

      const readnoo = document.createElement('input');
      readnoo.setAttribute('type', 'radio');
      readnoo.setAttribute('name', `answer${element.id}`);
      readnoo.setAttribute('value', 'no');
      readnoo.classList.add('radioclass');
      readnoo.id = `readnoo${element.id}`;
      document.querySelector(`#read${element.id}`).appendChild(readnoo);

      const readnoolabel = document.createElement('label');
      readnoolabel.setAttribute('for', 'readnoo');
      readnoolabel.textContent = "No";
      document.querySelector(`#read${element.id}`).appendChild(readnoolabel);

      if(element.read == 'yes'){
        document.querySelector(`#readyes${element.id}`).checked = true;
      }
      else{
        document.querySelector(`#readnoo${element.id}`).checked = true;
      }

      //button code goes here:

      const deletebutton = document.createElement('button');
      deletebutton.textContent = "Delete?";
      deletebutton.id = `delete${element.id}`;
      deletebutton.classList.add('delete');
      document.querySelector(`#book${element.id}`).appendChild(deletebutton);

    });

    function deletefromarray(){
      console.log('delete button clicked');
      IDtodelete = `${this.id.slice(6)}`;
      console.log(IDtodelete);
      myLibrary = myLibrary.filter(book => book.id != IDtodelete);
      console.log(myLibrary);
      booklist();
    }

    const deletebuttons = document.querySelectorAll(".delete");

    deletebuttons.forEach(element => {
    element.addEventListener('click', deletefromarray)
    });

    //update read status in array code goes here:

    const radioButtons = document.querySelectorAll('.radioclass');

    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('click', updatereadstatusinarray)
    });

    function updatereadstatusinarray(){
      const radioGroup = document.querySelectorAll(`input[name=answer${this.id.slice(7)}]`);
      console.log(radioGroup)
      
      let selectedValue = 0;
      radioGroup.forEach(radio => {
        if (radio.checked) {
          selectedValue = radio.value;
        }
      });
      console.log(selectedValue)

      console.log('radio button clicked');
      IDtoupdate = `${this.id.slice(7)}`;
      console.log(IDtoupdate);

      //myLibrary.filter(book => book.id == IDtoupdate) = selectedValue;
      // console.log(myLibrary.indexOf(myLibrary.filter(book => book.id == IDtoupdate)));
      //console.log(myLibrary.filter(book => book.id == IDtoupdate));
      // position = myLibrary.filter(book => book.id == IDtoupdate);
      // console.log(position);

      let libraryIndex = 0
      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == Number(IDtoupdate)) {
          
          console.log(i);
          libraryIndex = i;
        }
      }

      console.log('hello world');
      console.log(myLibrary[libraryIndex]);
      console.log(myLibrary[libraryIndex].read);
      
      myLibrary[libraryIndex].read = selectedValue

    }
  }
}

