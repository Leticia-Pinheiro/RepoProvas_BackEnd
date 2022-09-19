import { Router } from "express"
import * as testController from "../controllers/testController"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import verifyToken from "../middlewares/verifyToken"
import testSchema from "../schemas/testSchema"

const testRouter = Router()
const endpoint = "/test"

testRouter.post(
	"/test",	
	ValidateSchema(testSchema),
    verifyToken,
	testController.addTest
)

testRouter.get(
	"/tests/discipline",		
    verifyToken,
	testController.getTestsByDiscipline
)

testRouter.get(
	"/tests/teacher",		
    verifyToken,
	testController.getTestsByTeacher
)

export default testRouter