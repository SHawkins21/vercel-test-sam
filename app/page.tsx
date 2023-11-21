"use client"; 

import Image from 'next/image'
import prisma from "@/lib/prisma"
import IncomeItem from './component/IncomeItem'
import { getIncome } from './orm/income'



//function


export default async function Home() {

    const income = await getIncome()
    

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
    </main>
  )
}
