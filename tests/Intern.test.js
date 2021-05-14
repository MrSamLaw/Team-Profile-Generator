const Intern = require("../lib/Intern");

describe('Intern', () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should set school via constructor argument", () => {
            const school = "Miyagi School of Karate";
            const intern = new Intern("paul", 1, "paul@gmail.com", school);

            // Verify that the new object has the correct properties
            expect(intern.school).toBe(school);
        });
    });

    describe("getRole", () => {
        it("should get return 'Intern' via getRole()", () => {
            const role = "Intern";
            const intern = new Intern("paul", 1, "paul@gmail.com");

            // Verify that the new object has the correct properties
            expect(intern.getRole()).toBe(role);
        });
    });

    describe("getSchool", () => {
        it("should get school of intern via getSchool()", () => {
            const school = "Miyagi School of Karate";
            const intern = new Intern("paul", 1, "paul@gmail.com", school);

            // Verify that the new object has the correct properties
            expect(intern.getSchool()).toBe(school);
        });
    });

});