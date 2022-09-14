import { users } from "@prisma/client"

export type TypeUser = Omit<users, 'id'>

export interface IBodySignUp
    {
        email: string;
        password: string;
        confirmedPassword: string;
    }
