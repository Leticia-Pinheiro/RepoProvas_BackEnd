import prisma from '../database/postgres';
import {IBodySignUp} from '../utils/interfaces'
import { EncryptData } from '../../src/utils/bcrypt';

const userFactory = (email: string, password: string) => {
	return prisma.users.create({
		data: {
			email,
			password: EncryptData(password),
		},
	});
};

export default userFactory;