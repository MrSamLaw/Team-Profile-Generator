const Employee = require("../lib/Employee");

describe('Employee', () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should create an object", () => {
            const employee = new Employee();

            // Verify that the new object has the correct properties
            expect(typeof employee).toBe("object");
        });
        it("should set name via constructor argument", () => {
            const name = "paul";
            const employee = new Employee(name);

            // Verify that the new object has the correct properties
            expect(employee.name).toBe(name);
        });
        it("should set id via constructor argument", () => {
            const id = 1;
            const employee = new Employee("paul", id);

            // Verify that the new object has the correct properties
            expect(employee.id).toBe(id);
        });
        it("should set email via constructor argument", () => {
            const email = "paul@gmail.com";
            const employee = new Employee("paul", 1, email);

            // Verify that the new object has the correct properties
            expect(employee.email).toBe(email);
        });
    });

    describe("getName", () => {
        it("should get name of employee via getName()", () => {
            const name = "paul";
            const employee = new Employee(name);

            // Verify that the new object has the correct properties
            expect(employee.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it("should get id of employee via getId()", () => {
            const id = 1;
            const employee = new Employee("paul", 1);

            // Verify that the new object has the correct properties
            expect(employee.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should get email of employee via getEmail()", () => {
            const email = "paul@gmail.com";
            const employee = new Employee("paul", 1, "paul@gmail.com");

            // Verify that the new object has the correct properties
            expect(employee.getEmail()).toBe(email);
        });
    });

    describe("getRole", () => {
        it("should get return 'Employee' via getRole()", () => {
            const role = "Employee";
            const employee = new Employee("paul", 1, "paul@gmail.com");

            // Verify that the new object has the correct properties
            expect(employee.getRole()).toBe(role);
        });
    });
});