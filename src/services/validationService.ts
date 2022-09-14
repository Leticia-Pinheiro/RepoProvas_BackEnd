import { users } from "@prisma/client"
import * as userRepository from "../repositories/userRepository"
import * as testRepository from "../repositories/testRepository"
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

export async function validateToAddTest(
    categoryName: string,
    teacherName: string,
    disciplineName: string){

    const categoryId : number = await getCategoryId(categoryName)
    const disciplineId : number = await getDisciplineId(disciplineName)
    const teacherId : number = await getTeacherId(teacherName)
    
    const teacherDisciplineId : number = await getTeacherDisciplineId(teacherId, disciplineId)

    return {categoryId, teacherDisciplineId}
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

export async function getCategoryId(
    categoryName: string){

    const categoryData = await testRepository.getCategoryId(categoryName)

    if(!categoryData){
        throw {code: "Not Found", message: "Category not found"}
    }

    return categoryData.id
}

export async function getTeacherId(
    teacherName: string){

    const teacherData = await testRepository.getTeacherId(teacherName)

    if(!teacherData){
        throw {code: "Not Found", message: "Teacher not found"}
    }

    return teacherData.id
}

export async function getDisciplineId(
    disciplineName: string){

    const disciplineData = await testRepository.getDisciplineId(disciplineName)

    if(!disciplineData){
        throw {code: "Not Found", message: "Discipline not found"}
    }

    return disciplineData.id
}

export async function getTeacherDisciplineId(
    teacherId: number,
    disciplineId: number){

    const teacherDisciplineData = await testRepository.getTeacherDisciplineId(teacherId, disciplineId)

    if(!teacherDisciplineData){
        throw {code: "Not Found", message: "Incorrect teacher or discipline"}
    }

    return teacherDisciplineData.id
}
