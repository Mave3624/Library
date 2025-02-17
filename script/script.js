
const Library = [
    {
        title: "The woman I needed",
        author:"Maverick",
        page: 321,
        status: "unread",
    },
    {
        title: "What it takes to be a man",
        author:"Maverick",
        page: 631,
        status: "read",
    },
    {
        title: "What I have learnt",
        author:"Maverick",
        page: 211,
        status: "read",
    },
    {
        title: "Lazy lady",
        author: "MKaverick",
        page: 452,
        status: "Unread",
    },
]

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status
}

function addBook(Data) {
    Data = new Book("untold story", "Maverick", 534, "read")
    let added = {
        title: Data.title,
        author: Data.author,
        page: Data.page,
        status: Data.status,
    }
    Library.push(added)
}
addBook()

console.table(Library)