const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with the properties of name, id, email and github", () => {
            const obj = new Engineer("Julie", 52, "julie@test.com", "julieshub");

            expect(obj.name).toEqual("Julie");
            expect(obj.id).toEqual(52);
            expect(obj.email).toEqual("julie@test.com");
            expect(obj.github).toEqual("julieshub");
        });
    });
    describe("getGithub", () => {
        it("should return the github of an engineer", () => {
            const obj = new Engineer("Julie", 52, "julie@test.com", "julieshub");

            expect(obj.getGithub()).toEqual("julieshub");
        });
    });
    describe("getRole", () => {
        it("should return the role of an engineer", () => {
            const obj = new Engineer("Julie", 52, "julie@test.com", "julieshub");

            expect(obj.getRole()).toEqual("Engineer");
        });
    });
});