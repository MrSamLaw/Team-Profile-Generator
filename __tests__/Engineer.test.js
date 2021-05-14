const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should set github via constructor argument", () => {
            const github = "Engineer";
            const engineer = new Engineer("paul", 1, "paul@gmail.com", github);

            // Verify that the new object has the correct properties
            expect(engineer.github).toBe(github);
        });
    });

    describe("getRole", () => {
        it("should get return 'Engineer' via getRole()", () => {
            const role = "Engineer";
            const engineer = new Engineer("paul", 1, "paul@gmail.com");

            // Verify that the new object has the correct properties
            expect(engineer.getRole()).toBe(role);
        });
    });

    describe("getGithub", () => {
        it("should get github of engineer via getGithub()", () => {
            const github = "Engineer";
            const engineer = new Engineer("paul", 1, "paul@gmail.com", github);

            // Verify that the new object has the correct properties
            expect(engineer.getGithub()).toBe(github);
        });
    });

});