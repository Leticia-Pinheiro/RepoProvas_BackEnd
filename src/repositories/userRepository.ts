import prisma from "../database/postgres"
import { TypeUser } from "../utils/interfaces"
import { users } from "@prisma/client"


export async function createUser(
    userData: TypeUser){  
          
    await prisma.users.create({data: userData})       
}

export async function searchUserByEmail(
    email: string){
    
    const userData = await prisma.users.findUnique({where: {email}})
    return userData
}

export async function searchUserById(
    id: number){       
        
    const userData = await prisma.users.findUnique({where: {id}})
    return userData
}