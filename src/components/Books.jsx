import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeBook } from './bookSlice'
import { getBooks } from './bookSlice'

function Books() {

  const books = useSelector(state=>state)
  const dispatch = useDispatch()

  function handleDelete(book){
    fetch(`http://127.0.0.1:8000/books/${book}/`,{
        method: "DELETE",
    })
    .then(res=>res)
    .then(()=>dispatch(removeBook(book)))
    .catch(error=>console.log(error))   
  }

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/books/")
    .then(res=>{
        if(res.ok){
            res.json().then(data=>dispatch(getBooks(data)))
        }else{
            res.json().then(console.log)
        }
    })
    .catch(error=>console.log(error))
  }, [])

  if (books){
  return (
    <div>
        {books.map(book=>{
            return (
            <div key={book.id}>
                <h2>{book.title}</h2>
                <h3>{book.isbn}</h3>
                <h4>{book.pub_date}</h4>
                <button onClick={()=>handleDelete(book.id)}>Delete</button>
            </div>
            )
        })}
    </div>
  )
    }
}

export default Books