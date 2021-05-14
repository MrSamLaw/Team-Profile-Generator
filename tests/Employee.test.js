const Employee = require("../lib/Employee");

describe('Employee', () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should create an object with a name, id an email if provided with valid arguments", () => {
            const employee = new Employee("Paul", 1, "paul@gmail.com");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Paul");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("paul@gmail.com");
        });
    });
});