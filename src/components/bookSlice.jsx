const books = []

export function addBook(book){
    return {
        type: "books/add",
        payload: book
    }
}; 

export function removeBook(book){
    return {
        type: "books/remove",
        payload: book,
    }
};

export function getBooks(books){
    return {
        type: "books/get",
        payload: books
    }
}

export function updateBook(book){
    return {
        type: "books/update",
        payload: book,
    }
}

export default function bookReducer(state=books, action){

    switch(action.type){
        case "books/add":
            return [...state, action.payload]
        case "books/remove":
            return state.filter(item=>item.id !== action.payload)
        case "books/get":
            return action.payload
        case "books/update":
            return state.map(item=>{
                if (item.id===action.payload.id) return action.payload
                return item
            })
        default:
            return state
    }
}