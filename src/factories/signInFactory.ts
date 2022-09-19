import { faker } from "@faker-js/faker";

export async function createNewUser () {
  const user = {
    email: faker.internet.email(),
    password: "teste12345"    
  };

  return user;
} 