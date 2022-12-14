import { Request, Response } from "express"
import * as authService from "../services/authService"
import { IBodySignUp, TypeUser } from "../utils/interfaces"

export async function signUp(req: Request, res: Response){
        
    const userData: IBodySignUp = req.body 
    await authService.signUp(userData)
    res.send("Registration successfully complete").status(201)    
}

export async function signIn(req: Request, res: Response){

    const userData : TypeUser = req.body 
    const token = await authService.signIn(userData)
    res.send(token).status(200)
}