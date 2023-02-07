import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeBook } from './bookSlice'
function Books() {

  const books = useSelector(state=>state)
  const dispatch = useDispatch()

  function handleDelete(book){
    dispatch(removeBook(book))
  }
  
  return (
    <div>
        {books.map(book=>{
            return (
            <>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <h4>{book.isbn}</h4>
                <button onClick={()=>handleDelete(book.title)}>Delete</button>
            </>
            )
        })}
    </div>
  )
}

export default Books