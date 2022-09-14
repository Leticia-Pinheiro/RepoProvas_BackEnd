import { users } from "@prisma/client"

export type TypeUser = Omit<users, 'id'>

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