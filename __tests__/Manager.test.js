const Manager = require("../lib/Manager.js");

test("Verifies a manager object was created", () => {
  const manager = new Manager("Vegeta", 336, "princeofallsaiyans@email.com", 1)
  
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
})

