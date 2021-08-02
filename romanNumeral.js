function convertToNumeric(roman) {
    
    const conversion = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };

    let arabic = 0;
    let romanArray = roman.split('');

    //If only single digit - find in object and return
    //else compare values of digits
    if (romanArray.length === 1) {
        arabic = conversion[romanArray[0]];
        console.log(arabic);
        return arabic;
    }

    if (romanArray.length > 1) {
        //Match roman numeral key to number in object
        //Loop through array comparing adjacent index values
        for (let i = 1; i < romanArray.length; i++) {
            //On first loop add both values, on subsequent add existing value to current index value
            if (conversion[romanArray[i]] > conversion[romanArray[i - 1]]) {
               arabic += conversion[romanArray[i]] - conversion[romanArray[i - 1]];
            }
            if (conversion[romanArray[i]] <= conversion[romanArray[i - 1]])
                arabic += conversion[romanArray[i]] + conversion[romanArray[i - 1]];
            }
        }
        console.log(arabic);
        return arabic;
        }
    //console.log(arabic);
    //return arabic;


convertToNumeric('III');


module.exports = convertToNumeric;