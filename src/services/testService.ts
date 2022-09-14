import * as validationService from "./validationService"
import * as testRepository from "../repositories/testRepository"
import { categories, teachers, disciplines, terms, teachersDisciplines, tests } from "@prisma/client"
// import { IBodyAddTest, TypeCategory, TypeTeacher, TypeDiscipline, TypeTerm, TypeTeacherDiscipline, TypeTest } from "../utils/interfaces"
import { IBodyAddTest, TypeTest } from "../utils/interfaces"

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

export async function getTestsByDiscipline(){}

export async function getTestsByTeacher(){}

