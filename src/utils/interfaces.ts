import { users, categories, teachers, disciplines, terms, teachersDisciplines, tests } from "@prisma/client"

export type TypeUser = Omit<users, 'id'>

export type TypeTest = Omit<tests, 'id'>

export interface IBodySignUp
    {
        email: string;
        password: string;
        confirmedPassword: string;
    }

export interface IBodyAddTest
    {
        name: string;
        pdfUrl: string;
        categoryName: string;
        teacherName: string;
        disciplineName: string;
    }