function convertToObj(json) {
    let object = JSON.parse(json);
    Object.entries(object).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    })
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');