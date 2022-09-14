import prisma from "../database/postgres"
import { TypeUser } from "../utils/interfaces"
import { categories, teachers, disciplines, terms, teachersDisciplines, tests } from "@prisma/client"
// import { IBodyAddTest, TypeCategory, TypeTeacher, TypeDiscipline, TypeTerm, TypeTeacherDiscipline, TypeTest } from "../utils/interfaces"
import { IBodyAddTest, TypeTest } from "../utils/interfaces"

export async function addTest(
    testData: TypeTest){

    await prisma.tests.create({data: testData})
}

export async function getCategoryId(
    categoryName: string){

    const categoryData= await prisma.categories.findUnique({where: {name : categoryName}})
    return categoryData
}

export async function getTeacherId(
    teacherName: string){
    const teacherData= await prisma.teachers.findUnique({where: {name : teacherName}})
    return teacherData
}

export async function getDisciplineId(
    disciplineName: string){
    const disciplineData= await prisma.disciplines.findUnique({where: {name : disciplineName}})
    return disciplineData
}

export async function getTeacherDisciplineId(
    teacherId: number,
    disciplineId: number){

    const teacherDisciplineData = await prisma.teachersDisciplines.findFirst({where: {teacherId, disciplineId}})
    return teacherDisciplineData
    
}