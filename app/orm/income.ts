import prisma from "@/lib/prisma";

export const getIncome = async () => { 
    const income = await prisma.income.findMany()
    return income
}

export const createBill = async(title:string 
    ,note:string, 
    bill:number,
    ) => {
        // const newBill = await prisma.income.create({
        //     data:{
        //         title,
        //         note, 
        //         bill
        //     }
        // })
        // return newBill
    }