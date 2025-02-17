const main = document.querySelector("main")
const add = document.querySelector(".add>button")

const Library = []

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status
}

function addBook(a, b, c, d, e) {
    const Data = new Book(a, b, c, d, e)
    let added = {
        title: Data.title,
        author: Data.author,
        page: Data.page,
        status: Data.status,
    }
    Library.push(added)
}

let color = function(value) {
    if (value.textContent !== "Read")  {
        value.style.color = "red"
    }
}

add.addEventListener('click', (title, author, page, status) => {
    title = prompt("Enter book name", "More than lovers")
    author = prompt("Enter book author", "Mave")
    page = prompt("Enter number of page", 762)
    status = prompt("Enter read status", "Read")

addBook(title, author, page, status)

    let append = function() {
        let length = Library.length - 1
        let object = Library[length]
          
    let book = document.createElement("div")
        book.setAttribute("class", "book")
        book.setAttribute("id", length)

    let bookTitle = document.createElement("p")
        bookTitle.setAttribute("class", "title")
        bookTitle.textContent = object.title
        book.appendChild(bookTitle)

    let bookAuthor = document.createElement("p")
        bookAuthor.setAttribute("class", "author")
        bookAuthor.textContent = `${object.author}.`
        book.appendChild(bookAuthor)

    let bookPage = document.createElement("p")
        bookPage.textContent = `${object.page}pages.`
        book.appendChild(bookPage)

    let bookStatus = document.createElement("p")
        bookStatus.textContent = object.status
        book.appendChild(bookStatus)
        color(bookStatus)

    let by = document.createElement("span")
        by.textContent = "By"
        bookAuthor.before(by)

    main.appendChild(book)
    }
    append()
})