const main = document.querySelector("main")
const add = document.querySelector(".add>button")
const dialog = document.querySelector('dialog')
const form = document.querySelector('#form')
const submit = document.querySelector('#btn-1')
const cancel = document.querySelector('#btn-2')
const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'

const Library = [
    {title: 'Hanging tree 1', author: 'Vampire', page: 123, status: 'Unread'},
    {title: 'Hanging tree 2', author: 'Vampire', page: 456, status: 'Unread'},
    {title: 'Hanging tree 3', author: 'Vampire', page: 789, status: 'Unread'},
    {title: 'Hanging tree 4', author: 'Vampire', page: 654, status: 'Unread'},
    {title: 'Hanging tree 5', author: 'Vampire', page: 543, status: 'Unread'},
    {title: 'More than lovers part 1', author: 'Mave', page: '504', status: 'Read'},
    {title: 'More than lovers part 2', author: 'Mave', page: '521', status: 'Read'},
    {title: 'More than lovers part 3', author: 'Mave', page: '431', status: 'Read'},
    {title: 'More than lovers part 4', author: 'Mave', page: '652', status: 'Read'},
    {title: 'More than lovers part 5', author: 'Mave', page: '544', status: 'Read'},
    {title: 'More than lovers part 6', author: 'Mave', page: '762', status: 'Read'},
    {title: 'More than lovers part 7', author: 'Mave', page: '762', status: 'Read'},
    {title: 'More than lovers part 8', author: 'Mave', page: '453', status: 'Read'},
    {title: 'More than lovers part 9', author: 'Mave', page: '324', status: 'Read'},
    {title: 'More than lovers part 10', author: 'Mave', page: '543', status: 'Read'},
    {title: 'My break up story 1', author: 'Maverick', page: '762', status: 'Read'},
    {title: 'My break up story 2', author: 'Maverick', page: '343', status: 'Read'},
    {title: 'My break up story 3', author: 'Maverick', page: '523', status: 'Read'},
    {title: 'My break up story 4', author: 'Maverick', page: '762', status: 'Read'},
    {title: 'My break up story 5', author: 'Maverick', page: '578', status: 'Read'},
]

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status
}

function addBook(a, b, c, d, e) {
    const Data = new Book(a, b, c, d, e)
    const push = {
        title: Data.title,
        author: Data.author,
        page: Data.page,
        status: Data.status,
    }
    Library.push(push)
}

function Append(Index, Length) {
    for (let index = Index; index < Length; index++) {
    const element = Library[index]

        Card = document.createElement("div")
            Card.setAttribute("class", `book ${index}`)
            Card.setAttribute("data-index", index)
        
        bookTitle = document.createElement("p")
            bookTitle.setAttribute("class", "title")
            bookTitle.textContent = element.title
            Card.appendChild(bookTitle)
        
        bookAuthor = document.createElement("p")
            bookAuthor.setAttribute("class", "author")
            bookAuthor.textContent = `${element.author}`
            Card.appendChild(bookAuthor)
        
        bookPage = document.createElement("p")
            bookPage.setAttribute('class', 'page')
            bookPage.textContent = `${element.page} pages`
            Card.appendChild(bookPage)
        
        bookStatus = document.createElement("p")
            bookStatus.setAttribute('class', 'status')
            bookStatus.textContent = element.status
            Card.appendChild(bookStatus)
        
        by = document.createElement("span")
            by.textContent = "By"
            bookAuthor.before(by)
        
        deleteButton = document.createElement("button")
            deleteButton.setAttribute("class", "delete")
            deleteButton.innerHTML = svg
            Card.appendChild(deleteButton)
        
        main.appendChild(Card)
        }
}

function loop(Length, MainArray) {
    Length = Library.length
    MainArray = [...main.querySelectorAll('.book')]
    IndexValue = MainArray.length;
if (Length > IndexValue) {
    Append(IndexValue, Length)
}}

loop()

/*
add.addEventListener('click', (title, author, page, status) => {
    title = prompt("Enter book name", "More than lovers part")
    author = prompt("Enter book author", "Mave")
    page = prompt("Enter number of page", 762)
    status = prompt("Enter read status", "Read")

addBook(title, author, page, status)
loop()
})
*/

function Delete() {
    const DeleteArray = [...main.querySelectorAll('.delete')]
    console.log(DeleteArray)
    DeleteArray.forEach((element, index, object) => {
        element.addEventListener('click', () => {
            value()
            Library[index] = 'empty'
            main.querySelector(`[data-index = '${index}']`).remove()
        })
    });
}
function value() {
    const Books = [...main.querySelectorAll('.book')]
    Books.forEach((element, index) => {
        element.setAttribute('data-index', index)
    
    })
    Delete()
}
Delete()

add.addEventListener('click', (e) => {
    dialog.showModal()
})
cancel.addEventListener('click', (e) => {
    dialog.close()
})


submit.addEventListener('click', (e) => {
    e.preventDefault()

    let req = [...document.querySelectorAll('[required]')]
    if (
    req.forEach(element => {
       console.log(element.value)
    }))
   {
    dialog.close()
    title = document.querySelector('#title').value
    author = document.querySelector('#author').value
    page = document.querySelector('#page').value
    statu = document.querySelector('#status').value
   } 

})