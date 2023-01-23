const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with the properties of name, id, email and school", () => {
            const obj = new Intern("John", 36, "john@test.com", "Test University");

            expect(obj.name).toEqual("John");
            expect(obj.id).toEqual(36);
            expect(obj.email).toEqual("john@test.com");
            expect(obj.school).toEqual("Test University");
        });
    });
    describe("getSchool", () => {
        it("should return the school of an intern", () => {
            const obj = new Intern("John", 36, "john@test.com", "Test University");

            expect(obj.getSchool()).toEqual("Test University");
        });
    });
    describe("getRole", () => {
        it("should return the role of an intern", () => {
            const obj = new Intern("John", 36, "john@test.com", "Test University");

            expect(obj.getRole()).toEqual("Intern");
        });
    });
});