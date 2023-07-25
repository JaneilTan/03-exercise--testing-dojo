const { isEven, sumArray, parseOrZero, keys, greetName } = require("./kata");

describe("Dojo", () => {
    test("should return true for even number", () => {
        // arrange
        const even = 4;
        // act
        const actual = isEven(even);
        // assert
        expect(actual).toBe(true);

    });

    test ("should return false for odd numbers", () => {
        const odd = 3;

        const actual = isEven(odd);

        expect(actual).toBe(false)
    });

    test("should return a string type number to a number type", () => {
        const validStringNumber = "123";
        
        const actual = parseOrZero(validStringNumber);

        expect(actual).toBe(123);
    });

    test("should parse 0 for an input", () => {
        const input = "abc123";

        const actual = parseOrZero(input);

        expect(actual).toBe(0);
    });

    test("should add all the numbers in an array", () => {
        const numbers = [1, 2, 3];

        const actual = sumArray(numbers);

        expect(actual).toBe(6);
    });

    test("should get all property names from an object", () => {
        const properties = {
            id: 1,
            description: "4 Bedroom, 2 bath, 2 car garage",
            address: "1st st, Narnia",
            price: "1.5 million",
        }

        const actual = keys(properties);

        expect(actual).toEqual(["id", "description", "address", "price"]);
    });

    test("should format a greeting with a persons' name", () => {
        const fullName = {
            firstName: "John",
            lastName: "Doe",
        }

        const actual = greetName(fullName);

        expect(actual).toEqual("Hello John Doe");
    });
});

