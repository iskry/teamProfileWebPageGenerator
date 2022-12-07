// takes writeFileSync from the fs module
const {writeFileSync} = require('fs')
const Manager = require('../lib/Manager')

// function to generate team HTML page using the data that is passed through
function generateHTML(res) {
writeFileSync(`./dist/index.html`, `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
`)
  for (const employee of res) {
    if (employee.confirmIntern === "Intern") {
      console.log(employee)
    writeFileSync(`./dist/index.html`, `
<div class="card intern" style="width: 18rem;">
<div class="card-header">
  Intern
</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.name}</li>
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item">${employee.email}</li>
      <li class="list-group-item">${employee.school}</li>
    </ul>
</div>
`, {flag: 'a'})
    } 
    else  if (employee.confirmEngineer === "Engineer") {
        console.log(employee)
      writeFileSync(`./dist/index.html`, `
  <div class="card engineer" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.name}</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.github}</li>
      </ul>
  </div>
  `, {flag: 'a'})
    } 
    if (employee.confirmManager === "Manager") {
      console.log(employee)
    writeFileSync(`./dist/index.html`, `
<div class="card manager" style="width: 18rem;">
<div class="card-header">
  Manager
</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.name}</li>
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item">${employee.email}</li>
      <li class="list-group-item">${employee.officeNumber}</li>
    </ul>
</div>
`, {flag: 'a'})
    } 
  }

}

// exports generateHTML function from module
module.exports = generateHTML; 
