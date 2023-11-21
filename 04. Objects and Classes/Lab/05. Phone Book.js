function collectPhoneNumber(arr) {
    const phoneObject = arr.reduce((acc, curr) => {
        const [name, number] = curr.split(' ');
        acc[name] = number;
        return acc
    })

    Object.entries(phoneObject).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    })
}

collectPhoneNumber(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);