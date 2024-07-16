import React from 'react'
import Bookshow from '../component/bookshow'
import { books } from '../db/db'
function Listbook() {
  console.log("first",books)
  return (
    <div >
            
        {books.map((book, index) => (
      <div  key={index}>
        <div> {book.title}   title={book.title}
          price={book.price}
          description={book.description}
          img={book.img} 
          genre={book.genre}
          author={book.author}</div>
        <Bookshow 
          key={index}
          title={book.title}
          price={book.price}
          description={book.description}
          img={book.img} 
          genre={book.genre}
          author={book.author}
        /> 

      </div>
          
          
      
  ))}
  </div>
  )
}


export default Listbook