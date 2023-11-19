function convertToJSON(firstName, secondName, hairColor) {
    let object = {firstName, secondName, hairColor};

    let json = JSON.stringify(object);
    
    console.log(json);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');