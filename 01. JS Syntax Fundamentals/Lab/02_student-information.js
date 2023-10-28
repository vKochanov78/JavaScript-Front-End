function student_info (student_name, student_age, student_grade) {
    console.log(`Name: ${student_name}, Age: ${student_age}, Grade: ${student_grade.toFixed(2)}`)
}

student_info('John', 15, 5.54678) // Expected output: Name: John, Age: 15, Grade: 5.55
student_info('Steve', 16, 2.1426) // Expected output: Name: Steve, Age: 16, Grade: 2.14
student_info('Marry', 12, 6.00) // Expected output: Name: Marry, Age: 12, Grade: 6.00
