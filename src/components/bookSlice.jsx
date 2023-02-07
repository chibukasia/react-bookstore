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

export default function bookReducer(state=books, action){

    switch(action.type){
        case "books/add":
            return [...state, action.payload]
        case "books/remove":
            return state.filter(item=>item.title !== action.payload)
        default:
            return state
    }
}