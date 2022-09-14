import joi from "joi"

const signUpSchema = joi.object({    
	email: joi.string().email().required(),
	password: joi.string().min(8).required(),
    confirmedPassword: joi.string().min(8).required(),
});

export default signUpSchema;