import createNewUser  from './signInFactory';
import userFactory from './userFactory';
import { generateToken } from '../../src/utils/generateToken';

const tokenFactory = async () => {
	const user = createNewUser()    
	const createdUser = await userFactory(user);
	const token = generateToken(createdUser.id);

	return token;
};

export default tokenFactory;