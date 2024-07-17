import React from 'react'
import Bookshow from '../component/bookshow'
import { books } from '../db/db'
function Listbook() {
 
  return (
    <div >
            
        {books.map((book, index) => (
      <div  key={index}>
        
        <Bookshow 
          
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