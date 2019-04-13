// Promise.all([dcJusticeStudents.map( student => Student.create({
//     firstName: student.firstName,
//     lasttName: student.lasttName,
//     email: student.email,
//     imageUrl: student.imageUrl,
//     gpa: student.gpa
// }))])
// ]))
// .then( ([ [campuses], [dcStudents] ]) => {
// return Promise.all([
//     dcStudents.map( student => {
//         student.setCampus(campuses)
//     })
// ])
// })