function number_loop (m, n) {
    for (let i=m; i>=n; i--)
    console.log(i)
}

number_loop(6, 2)    // Expected output: 6
//                                       5
//                                       4
//                                       3
//                                       2

number_loop(4, 1)    // Expected output: 4
//                                       3
//                                       2
//                                       1