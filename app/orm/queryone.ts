import prisma from "@/lib/prisma";

export const getOneQuery = async () => { 
    const OneQuery = await prisma.queryOne.findUnique(
         
    )
    return OneQuery
}