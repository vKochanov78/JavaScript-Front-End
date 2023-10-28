function excellent_grade_check (grade) {
    if(grade >= 5.50){
        console.log('Excellent');
    }else{
        console.log('Not excellent')
    }
}

excellent_grade_check(5.50) // Expected output: Excellent
excellent_grade_check(4.35) // Expected output: Not excellent