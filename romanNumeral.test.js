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

//IV subtracting the smaller unit from larger
//VI adds larger unit to smaller one
