import prisma from "@/lib/prisma";

export const getOneInvoice = async (id:string) => { 
    const thisQuery = await prisma.queryOne.findUnique({

        where:{
            id
        }

    })
    
    return thisQuery
}
// Another way to find the Unique value 

// export const getIncome = async () => { 
//     const income = await prisma.income.findMany({

//        include:{
//             author:{
//                 select:{
//                     name:true
//                 }
//             }
//         }


//     })

// return income