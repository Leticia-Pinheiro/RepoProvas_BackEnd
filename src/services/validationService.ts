import { users } from "@prisma/client"
import * as userRepository from "../repositories/userRepository"
import { IBodySignUp, TypeUser } from "../utils/interfaces"
import bcrypt from "bcrypt"

export async function validateToSignUp(
    userData: IBodySignUp){

    const {email, password, confirmedPassword} = userData
    const user = await validateUserByEmail(email)

    if(user){
        throw { code: "Unauthorized", message: "E-mail already registered"}
    }

    await validatePasswordAndConfirmedPassword(password, confirmedPassword)

}

export async function validateToSignIn(
    userData: TypeUser){

    const {email, password} = userData
    const user = await validateUserByEmail(email)       

    if(!user){
        throw { code: "Not Found", message: "Invalid e-mail "}
    }

    await validatePassword(password, user.password)    
    return user
}

//--------------------------------------------------------

export async function validateUserByEmail(
    email: string){

    const userData = await userRepository.searchUserByEmail(email)   
    
    return userData    
}

export async function validatePasswordAndConfirmedPassword(
    password: string,
    confirmedPassword: string){

    if(confirmedPassword !== password){
        throw {code: "Unauthorized", message: "Different passwords"}
    }
}

export async function validatePassword(
    password: string,
    encryptedPassword: string){

    if(!bcrypt.compareSync(password, encryptedPassword)){
        throw { code: "Not Found", message: "Invalid password"}
    }
}
