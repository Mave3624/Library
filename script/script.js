const main = document.querySelector("main")
const add = document.querySelector(".add>button")
const dialog = document.querySelector('dialog')
const dialogArray = [...document.querySelectorAll('[required]')]
const form = document.querySelector('#form')
const submit = document.querySelector('#btn-1')
const cancel = document.querySelector('#btn-2')
const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'

const Library = [
    new Book('Welcome To My Library Project', 'Maverick', '10000','Default')
]

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status
}

function BookToLibrary(Title, Author, Page, Status) {
    const Data = new Book(Title, Author, Page, Status)
    Library.push(Data)
}

function Append(Index, Length) {
    for (let index = Index; index < Length; index++) {
    const element = Library[index]

        BookCover = document.createElement("div")
        BookCover.setAttribute("class", `book`)

        bookTitle = document.createElement("p")
            bookTitle.setAttribute("class", "title")
            bookTitle.textContent = element.title
            BookCover.appendChild(bookTitle)
        
        bookAuthor = document.createElement("p")
            bookAuthor.setAttribute("class", "author")
            bookAuthor.textContent = `${element.author}`
            BookCover.appendChild(bookAuthor)
        
        bookPage = document.createElement("p")
            bookPage.setAttribute('class', 'page')
            bookPage.textContent = `${element.page} pages`
            BookCover.appendChild(bookPage)
        
        bookStatus = document.createElement("p")
            bookStatus.setAttribute('class', 'status')
            bookStatus.textContent = element.status
            BookCover.appendChild(bookStatus)
        
        by = document.createElement("span")
            by.textContent = "By"
            bookAuthor.before(by)
        
        deleteButton = document.createElement("button")
            deleteButton.setAttribute("class", "delete")
            deleteButton.innerHTML = svg
            BookCover.appendChild(deleteButton)
        
        main.appendChild(BookCover)
        }
        DataIndexUpdater()
        Delete()
        StatusChanger()
}

function DisplayMostRecent() {
    let MainArray = [...main.querySelectorAll('.book')]

    let LibraryLength = Library.length
    let MainLength = MainArray.length;
    if (LibraryLength > MainLength) {
    Append(MainLength, LibraryLength)
}}
DisplayMostRecent()

function Delete() {
const DeleteArray = [...main.querySelectorAll('.delete')]
    DeleteArray.forEach((element,index, object) => {
        let lastArray = object[DeleteArray.length - 1] === element
    if (lastArray) {
        element.addEventListener('click', () => {
            let CurrentButtonIndex = element.getAttribute('data-index')
            Library.splice(CurrentButtonIndex, 1)
            main.querySelector(`[data-index = '${CurrentButtonIndex}']`).remove()
        DataIndexUpdater();
        })
    }
})
}

function DataIndexUpdater() {
    const Books = [...main.querySelectorAll('.book')]
    Books.forEach((element, index) => {
        element.setAttribute('data-index', index)        
        element.classList = 'book' + ' '+index 
    })
    btn = [...main.querySelectorAll('.delete')]
    btn.forEach((element, index) => {
        element.setAttribute('data-index', index)
    })
    Status = [...main.querySelectorAll('.status')]
    Status.forEach((element, index) => {
        element.setAttribute('data-index', index)
    })
}

function upperCase(Text) {
    let FirstLetter = Text[0].toUpperCase()
    let Others = Text.slice(1).toLowerCase()
    return FirstLetter + Others
}

add.addEventListener('click', () => {
    dialog.showModal()

    let Title = dialogArray[0].value.trim().length >= 3
    let Author = dialogArray[1].value.trim().length >= 2
    if(!Title) {
        dialogArray[0].focus()
    } 
    else if (!Author) {
        dialogArray[1].focus()
    }
    else dialogArray[2].focus()
})

cancel.addEventListener('click', (e) => {
    dialog.close()
})

submit.addEventListener('click', (e) => {
    e.preventDefault()

    let Title = dialogArray[0].value.trim().length >= 3
    let Author = dialogArray[1].value.trim().length >= 2
    let Page = Number(dialogArray[2].value.trim()) >= 1

    if (Title && Author && Page) {
        Title = upperCase(dialogArray[0].value.trim())
        Author = upperCase(dialogArray[1].value.trim())
        Page = dialogArray[2].value.trim()
        let State = dialogArray[3].value.trim()

    BookToLibrary(Title, Author, Page, State)
    DisplayMostRecent()
    dialogArray[0].value = ''
    dialogArray[1].value = ''
    dialogArray[2].value = ''
    dialog.close()
    }

    else {
        if(!Title) {
            dialogArray[0].focus()
        } 
        else if (!Author) {
            dialogArray[1].focus()
        }
        else dialogArray[2].focus()
    }
})

Book.prototype.state = function() {
    let BookItem = prompt("Change read status", 'inprogress')
    this.status = upperCase(BookItem)
}

function StatusChanger() {
    const AvalibleStatus = document.querySelectorAll('.status')

    AvalibleStatus.forEach( (element, index, object) => {
        let lastArray = object[AvalibleStatus.length - 1] === element

        if (lastArray) {
        element.addEventListener('click', () => {
            Library[element.getAttribute('data-index')].state()
            
            element.textContent = Library[element.getAttribute('data-index')].status
        }
    )
}}
)}