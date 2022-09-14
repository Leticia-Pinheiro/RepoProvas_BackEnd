import { Request, Response } from "express"
import * as testService from "../services/testService"
// import { categories, teachers, disciplines, terms, teachersDisciplines, tests } from "@prisma/client"
// import { TypeCategory, TypeTeacher, TypeDiscipline, TypeTerm, TypeTeacherDiscipline, TypeTest } from "../utils/interfaces"
import { IBodyAddTest } from "../utils/interfaces"

export async function addTest(req: Request, res: Response){

    const testData : IBodyAddTest = req.body
    await testService.addTest(testData)

    res.send("Test registered successfully")
}

export async function getTestsByDiscipline(req: Request, res: Response){}

export async function getTestsByTeacher(req: Request, res: Response){}