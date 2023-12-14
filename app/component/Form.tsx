"use client"

import { createBill } from '../orm/income'
import React from 'react'


interface FormBill { 

    createBill:() => void



}

const Form = ({createBill}: FormBill) => {
    const create = async() => {
        const data = { 
            title:"verison", 
            noted:"Test", 
            bill:187.90
        }
        const cBill = await createBill("verison", "Test", 187.90)
        console.log('test'); 
    }



  return (
    <div>
        
    <button onClick={() => create()}> Create </button>

    </div>
  )
}

export default Form