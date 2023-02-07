import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from './bookSlice';

function BookForm() {
  const [book, setBook] = useState({})

  function handleChange(e){
    setBook({...book, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(addBook(book))
  }
  const dispatch = useDispatch()
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type={'text'} name='title' id='title' onChange={handleChange}/>
            <label htmlFor='author'>Author</label>
            <input type={'text'} name='author' id='author' onChange={handleChange}/>
            <label htmlFor='isbn'>ISBN</label>
            <input type={'text'} name='isbn' id='isbn' onChange={handleChange}/>
            <button type='submit'>Sumbit</button>
        </form>
    </div>
  )
}

export default BookForm