"use client"; 

import {User} from '@prisma/client'; 
import React from 'react'
import { getOneInvoice } from '../orm/invoice';

interface InvoiceProps {
    id:string;     
    title:string;
    bill:GLfloat,
    content:string | null ;
    published?: boolean; 
    author:User ;    
    authorId:string | null
}

const OnOneInvoice =async (id:string) => { 
        await getOneInvoice(id)
        
    }



const InvoiceItem = ({id, title, bill, content, published,author, authorId}: InvoiceProps) => {

  
  return (
    <div>
      <div>

      <li className=' text-3xl text-red-500' key={id}> </li>
                    <h1>{title}</h1>
                    <p>{bill}</p>
                    <p>{author?.name}</p>
      </div>
      <h2>
        {authorId}
        <button className='bg-green-300 text-center' onClick={(e) => OnOneInvoice(id)}>Find Bill</button>


      </h2>




    </div>
  )
}

export default InvoiceItem

