const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with the properties of name, id, and email", () => {
      const obj = new Employee("Jane", 23, "jane@test.com");
    
      expect(obj.name).toEqual("Jane");
      expect(obj.id).toEqual(23);
      expect(obj.email).toEqual("jane@test.com");
    });
  });

  describe("getName", () => {
    it("should return the name of an employee", () => {
        const obj = new Employee("Jane", 23, "jane@test.com");

      expect(obj.getName()).toEqual("Jane");
    });
  });

  describe("getID", () => {
    it("should return the id of an employee", () => {
        const obj = new Employee("Jane", 23, "jane@test.com");

      expect(obj.getID()).toEqual(23);
    });
  });

  describe("getEmail", () => {
    it("should return the email of an employee", () => {
        const obj = new Employee("Jane", 23, "jane@test.com");

      expect(obj.getEmail()).toEqual("jane@test.com");
    });
  });
  describe("getRole", () => {
    it("should return the role of an employee", () => {
        const obj = new Employee("Jane", 23, "jane@test.com");

      expect(obj.getRole()).toEqual("Employee");
    });
  });
});
