import React, { useEffect, useState } from 'react';
import Bookshow from '../component/bookshow'

import { storyy } from '../Api/api';

function Listbook() {
  const [storyyy,setstory]=useState([])
  try{
    useEffect(()=>{
      const getstoryy=async()=>{
        const reponse=await storyy()
       

        setstory(reponse)
        
        return reponse
      }
      getstoryy()
  },[])}
    catch{
        console.log('Apierreur::',console.error())
    }
  
  return (
    <div  className='grid ml-3 gap-0 grid-cols-3 grid-rows-2  '>
            
        {storyyy.map((book, index) => (
      <div  key={index} className='400px' >
        
        <Bookshow 
          
          title={book.name}
          price={book.id}
          description={book.createdAt}
          image={book.avatar} 
         
        /> 

      </div>
          
          
      
  ))}
  </div>
  )
}


export default Listbook