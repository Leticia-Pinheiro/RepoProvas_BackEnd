import { Request, Response } from "express"
import * as testService from "../services/testService"
import { IBodyAddTest } from "../utils/interfaces"

export async function addTest(req: Request, res: Response){

    const testData : IBodyAddTest = req.body
    await testService.addTest(testData)

    res.send("Test registered successfully").status(201)
}

export async function getTestsByDiscipline(req: Request, res: Response){ 
    const testsData = await testService.getTestsByDiscipline()

    res.send(testsData).status(200)
}

export async function getTestsByTeacher(req: Request, res: Response){   
    const testsData = await testService.getTestsByTeacher()

    res.send(testsData).status(200)
}