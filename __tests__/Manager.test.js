const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with the properties of name, id, email, and officeNumber", () => {
            const obj = new Manager("Jerry", 40, "jerry@test.com", 7);

            expect(obj.name).toEqual("Jerry");
            expect(obj.id).toEqual(40);
            expect(obj.email).toEqual("jerry@test.com");
            expect(obj.officeNumber).toEqual(7);
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the office number of a manager", () => {
            const obj = new Manager("Jerry", 40, "jerry@test.com", 7);
            
            expect(obj.getOfficeNumber()).toEqual(7);
        });
    });
    describe("getRole", () => {
        it("should return the role of a manager", () => {
            const obj = new Manager("Jerry", 40, "jerry@test.com", 7);

            expect(obj.getRole()).toEqual("Manager");
        });
    });
});