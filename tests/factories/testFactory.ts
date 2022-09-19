import { faker } from "@faker-js/faker"
import { IBodyAddTest } from "../../src/utils/interfaces";

  const  createNewTest  =  ( ) : IBodyAddTest  =>  {
    return  {
    name: faker.lorem.words(2),
		pdfUrl: faker.internet.url(),
    categoryName: 'Prática',
    teacherName: 'Bruna Hamori',
    disciplineName: 'Humildade' ,
    } ;
  } ;
    

  export default createNewTest;
 