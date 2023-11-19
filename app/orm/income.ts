import prisma from "@/lib/prisma";

export const getIncome = async () => { 
    const income = await prisma.income.findMany()
    return income
}