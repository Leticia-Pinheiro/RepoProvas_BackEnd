import * as validationService from "./validationService"
import * as testRepository from "../repositories/testRepository"
import { IBodyAddTest } from "../utils/interfaces"

export async function addTest(
    testInfos: IBodyAddTest){

    const {name, 
        pdfUrl,
        categoryName,
        teacherName,
        disciplineName} = testInfos

    const {categoryId, teacherDisciplineId} = await validationService.validateToAddTest(categoryName, teacherName, disciplineName)
    const testData = { name, pdfUrl, categoryId, teacherDisciplineId}
    await testRepository.addTest(testData)

}

export async function getTestsByDiscipline(){
    
    const tests = await testRepository.getTestsByDiscipline()

    return tests
}

export async function getTestsByTeacher(){

    const tests = await testRepository.getTestsByDiscipline()

    return tests
}

