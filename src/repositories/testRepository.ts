import prisma from "../database/postgres"
import { TypeTest } from "../utils/interfaces"

export async function addTest(
    testData: TypeTest){

    await prisma.tests.create({data: testData})
}

export async function getTestsByDiscipline(){
		const tests = await prisma.terms.findMany({
			select: {
				number: true,
				disciplines : {
				  select: {
					id: true,
					name: true,
					teachersDisciplines: {
					  select: {
						tests: {
						  distinct: ['categoryId'],
						  select: {
							categories : {
							  select: {
								id: true,
								name: true,
								tests: {
								  select: {
									id: true,
									name: true,
									pdfUrl: true,
									teachersDisciplines: {
									  select: {
										teachers: {
										  select: {
											name: true,
										  },
										},
									  },
									},
								  },
								},
							  },
							},
						  },
						  orderBy: [
							{
							  categories: {
								name: 'desc',
							  },
							},
						  ],
						},
					  },
					},
				  },
				},
			  }, 
		})
	
		return tests
    
}

export async function getTestsByTeacher(){
		const tests = await prisma.teachers.findMany({
			select: {
				name: true,
				teachersDisciplines : {
				  select: {
					tests: {
					  distinct: ['categoryId'],
					  select: {
						categories: {
						  select: {
							id: true,
							name: true,
							tests: {
							  select: {
								id: true,
								name: true,
								pdfUrl: true,
								teachersDisciplines: {
								  select: {
									disciplines: { select: { name: true } },
								  },
								},
							  },
							},
						  },
						},
					  },
					  orderBy: [
						{
						  categories: {
							name: 'desc',
						  },
						},
					  ],
					},
				  },
				},
			  },
			});
	
		return tests
    
}

export async function getCategoryId(
    categoryName: string){

    const categoryData= await prisma.categories.findUnique({where: {name : categoryName}})
    return categoryData
}

export async function getTeacherId(
    teacherName: string){
    const teacherData= await prisma.teachers.findUnique({where: {name : teacherName}})
    return teacherData
}

export async function getDisciplineId(
    disciplineName: string){
    const disciplineData= await prisma.disciplines.findUnique({where: {name : disciplineName}})
    return disciplineData
}

export async function getTeacherDisciplineId(
    teacherId: number,
    disciplineId: number){

    const teacherDisciplineData = await prisma.teachersDisciplines.findFirst({where: {teacherId, disciplineId}})
    return teacherDisciplineData
    
}