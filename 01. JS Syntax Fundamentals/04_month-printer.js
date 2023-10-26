function month_printer (month) {
    let result;
    switch (month) {
        case 1:
            result = 'January';
            break;
        case 2:
            result = 'February';
            break;
        case 3:
            result = 'March';
            break;
        case 4:
            result = 'April';
            break;
        case 5:
            result = 'May';
            break;
        case 6:
            result = 'June';
            break;
        case 7:
            result = 'July';
            break;
        case 8:
            result = 'August';
            break;
        case 9:
            result = 'September';
            break;
        case 10:
            result = 'October';
            break;
        case 11:
            result = 'November';
            break;
        case 12:
            result = 'December';
            break;
        default:
            result = 'Error!';
            break;
    }
    console.log(result)
}

month_printer(1) // Expected output: January
month_printer(2) // Expected output: February
month_printer(3) // Expected output: March
month_printer(4) // Expected output: April
month_printer(5) // Expected output: May
month_printer(6) // Expected output: June
month_printer(7) // Expected output: July
month_printer(8) // Expected output: August
month_printer(9) // Expected output: September
month_printer(10) // Expected output: October
month_printer(11) // Expected output: November
month_printer(12) // Expected output: December
month_printer(13) // Expected output: Error!
