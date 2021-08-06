function convertToNumeric(roman) {
    
    const conversion = {
        "I" : 1,
        "IV" : 4,
        "V" : 5,
        "IX" : 9,
        "X" : 10,
        "XL": 40,
        "L" : 50,
        "XC": 90,
        "C" : 100,
        "CD": 400,
        "D" : 500,
        "CM": 900,
        "M" : 1000
    };

    let arabic = 0;
    
    let pattern = /IV|IX|XL|XC|CD|CM/g;

    let twoDigitNumerals = roman.match(pattern);    //returns array of 2 digit numerals

    if (twoDigitNumerals) {                         //If pattern matched any 2 digit numerals, convert them and add together
        twoDigitNumerals.forEach(numeral => {
            arabic += conversion[numeral]
        });
    }

    roman = roman.replace(pattern, '');     //Leaves only single digit numerals
    
    let romanArray = roman.split('');       //Split remaining digits into array

    romanArray.forEach(numeral => {         //Convert to arabic values and add on to total
        arabic += conversion[numeral]
    });

    return arabic;

}

module.exports = convertToNumeric;