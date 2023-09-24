
function show_menu(){
  const add_menu = document.querySelector(".addMenu");
  const add_book = document.querySelector(".add-book");
  add_book.addEventListener("click", ()=>{setTimeout(() => {add_menu.style.display = "flex";}, 500);});
}
  

function hide_menu(){
  const add_menu = document.querySelector(".addMenu");
  const hide_menu = document.querySelector(".hide");
  hide_menu.addEventListener("click", ()=>{setTimeout(() => {add_menu.style.display = "none";}, 500);});
}
show_menu();
hide_menu();

class Book{
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
  }
  
var myLibrary = [];

function get_form(){
  const btn_add = document.querySelector(".btn_add");
  
  btn_add.addEventListener("click",(e)=>{const add_menu = document.querySelector(".addMenu");
    var book = document.querySelector("#id-book").value;
    var title = document.querySelector("#id-book").value;
    var author = document.querySelector("#id-author").value;
    var pages = document.querySelector("#id-pages").value;
    if(book.length < 3){
      e.preventDefault();alert("Довжина назви книги має бути не менше 3 символів");
    }
    else if(author.length < 2){
      e.preventDefault();alert("Довжина назви автора має бути не менше 2 символів");
    }
    else{
      const newBook = new Book(title,author,pages);
      
      myLibrary.push(bookElement(newBook));
      document.querySelector("#id-book").value = "";
      document.querySelector("#id-author").value = "";
      document.querySelector("#id-pages").value = "";
      
      add_menu.style.display = "none";
  }
});

}
    
get_form();





function bookElement(newBook) {
  const container = document.getElementById("addS");
  const book = document.createElement("div");
  const title = document.createElement("a");
  const author = document.createElement("a");
  const description = document.createElement("a");
  const pages = document.createElement("a");
  const contfr = document.createElement("div");
  const btnRead = document.createElement("button");
  const btnRemove = document.createElement("button");
  title.classList.add("title");
  author.classList.add("author");
  description.classList.add("description");
  pages.classList.add("pages");
  title.innerHTML = newBook.title;
  author.innerHTML = newBook.author;
  description.innerHTML = "dsa";
  pages.innerHTML = newBook.pages;
  btnRead.innerHTML = "read";
  btnRemove.innerHTML = "remove";
  book.classList.add("card");
  container.appendChild(book);
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(description);
  book.appendChild(pages);
  book.appendChild(btnRead);
  book.appendChild(btnRemove);
  var isRead = true;
  btnRead.addEventListener("click",(e)=>{
    if (isRead) {
      btnRead.textContent = "unread";
      isRead = false;
  } else {
      btnRead.textContent = "read";
      isRead = true;
  }
  });
  btnRemove.addEventListener("click",()=>{book.remove()});
}

function addBookToLibrary(){
  
}