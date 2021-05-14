const Manager = require("../lib/Manager");

describe('Manager', () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should set office number via constructor argument", () => {
            const officeNumber = 43;
            const manager = new Manager("paul", 1, "paul@gmail.com", officeNumber);

            // Verify that the new object has the correct properties
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe("getRole", () => {
        it("should get return 'Manager' via getRole()", () => {
            const role = "Manager";
            const manager = new Manager("paul", 1, "paul@gmail.com");

            // Verify that the new object has the correct properties
            expect(manager.getRole()).toBe(role);
        });
    });

    describe("getOfficeNumber", () => {
        it("should get office Number of manager via getOfficeNumber()", () => {
            const officeNumber = 43;
            const manager = new Manager("paul", 1, "paul@gmail.com", officeNumber);

            // Verify that the new object has the correct properties
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
    });

});