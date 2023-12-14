"use client"; 

import Image from 'next/image'
import prisma from "@/lib/prisma"
import IncomeItem from './component/IncomeItem'
import { getIncome } from './orm/income'
import { getOneInvoice } from './orm/invoice';
import { QueryOne } from '@prisma/client';
import QueryOneItem from './component/InvoiceItem';
import { Key } from 'react';
import InvoiceItem from './component/InvoiceItem';




//function


export default async function Home() {

    const income = await getIncome()
    const onBill = async(id:string) => { 

    }


    const invoicereceived = async(id:string) => {
    
        await getOneInvoice(id)

    }
    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
          {
            income?.map((income, index) => (
              <IncomeItem
               
                author={{
                  id: '',
                  name: "Jon Doe",
                  email: "Jon.Doe@gmail.com",
                  createdAt: new Date,
                  updatedAt: new Date

                }} key={index}
                {...income}              
              />
            
            ))

          }

     </div>
     <div>

      { 
      
         invoicereceived?.map((id, invoice) => (

         <InvoiceItem   
            
            id={id}
            {...invoice}/>

         ))
      }      
          
     </div>
        








      <div>

      </div>



    </main>
  )
}
