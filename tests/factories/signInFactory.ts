import { faker } from "@faker-js/faker"
import { TypeUser } from "../../src/utils/interfaces"


  const createNewUser = (): TypeUser => {
    return {
      email: faker.internet.email(),
      password: "teste12345",
    };
  };

  export default createNewUser;
