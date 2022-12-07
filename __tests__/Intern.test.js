const Intern = require("../lib/Intern.js");

test("Verifies a intern object was created", () => {
  const intern = new Intern("Yamcha", 44, "baseballstar@email.com", "Turtle School")
  
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
})

