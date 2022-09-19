import { faker } from "@faker-js/faker";

export async function createNewTest () {
  const test = {
    name: faker.random.alphaNumeric(),
    pdfUrl: faker.internet.url(),
    categoryName: faker.random.alphaNumeric(),
    teacherName: faker.random.alphaNumeric(),
    disciplineName: faker.random.alphaNumeric()
  };

  return test;
} 