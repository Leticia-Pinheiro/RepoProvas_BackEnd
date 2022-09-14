import { Router } from "express"
import * as authController from "../controllers/authController"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import signUpSchema from "../schemas/signUpSchema"
import signInSchema from "../schemas/signInSchema"

const authRouter = Router()
const endpoint = "/auth"

authRouter.post(
	"/signUp",	
	ValidateSchema(signUpSchema),
	authController.signUp
)

authRouter.post(
	"/signIn",	
	ValidateSchema(signInSchema),
	authController.signIn
)

export default authRouter