const convertToNumeric = require('./romanNumeral');

test("passing in I returns 1", () => {
    expect(convertToNumeric("I")).toBe(1);
});

test("passing in V returns 5", () => {
    expect(convertToNumeric("V")).toBe(5);
});

test("passing in II returns 2", () => {
    expect(convertToNumeric("II")).toBe(2);
});

test("passing in III returns 3", () => {
    expect(convertToNumeric("III")).toBe(3);
});

test("passing in IV returns 4", () => {
    expect(convertToNumeric("IV")).toBe(4);
});

test("passing in VI returns 6", () => {
    expect(convertToNumeric("VI")).toBe(6);
});

test("passing in VIII returns 8", () => {
    expect(convertToNumeric("VIII")).toBe(8);
});

test("passing in XIV returns 14", () => {
    expect(convertToNumeric("XIV")).toBe(14);
});

test("passing in MCDXCIV returns 1494", () => {
    expect(convertToNumeric("MCDXCIV")).toBe(1494);
});

test("passing in empty string returns 0", () => {
    expect(convertToNumeric("")).toBe(0);
});

test("passing in an invalid input returns 0", () => {
    expect(convertToNumeric("nsjdsj")).toBe(0);
});
//IV subtracting the smaller unit from larger
//VI adds larger unit to smaller one

//differnce between digit > 4 e.g. VI
//