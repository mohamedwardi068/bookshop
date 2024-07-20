import React from 'react'
import Bookshow from '../component/bookshow'
import { books } from '../db/db'
function Listbook() {
 
  return (
    <div  className='grid ml-3 gap-0 grid-cols-3 grid-rows-2  '>
            
        {books.map((book, index) => (
      <div  key={index} className='400px' >
        
        <Bookshow 
          
          title={book.title}
          price={book.price}
          description={book.description}
          image={book.img} 
          genre={book.genre}
          author={book.author}
        /> 

      </div>
          
          
      
  ))}
  </div>
  )
}


export default Listbook