import * as validationService from "./validationService"
import * as authRepository from "../repositories/userRepository"
import { generateToken } from "../utils/generateToken"
import { EncryptData }  from "../utils/bcrypt"
import { IBodySignUp, TypeUser } from "../utils/interfaces"

export async function signUp(
    userData: IBodySignUp){
    
    const {email, password} = userData
    await validationService.validateToSignUp(userData)
    const encryptedPassword : string = EncryptData(password)
    const user = {email, password:encryptedPassword}
    await authRepository.createUser(user) 
}

export async function signIn(
    userData: TypeUser){

    const {id} = await validationService.validateToSignIn(userData)
    const token = generateToken(id)
    return token
}