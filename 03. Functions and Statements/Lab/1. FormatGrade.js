function format_grade (grade) {
        if (grade < 3.00) {
            console.log(`Fail (${grade.toFixed(2)})`);
        } else if (grade < 3.5) {
            console.log(`Poor (${grade.toFixed(2)})`);
        } else if (grade < 4.5) {
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade < 5.5) {
            console.log(`Very good (${grade.toFixed(2)})`);
        } else {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }

}

format_grade(3.33)
format_grade(4.50)
format_grade(2.99)