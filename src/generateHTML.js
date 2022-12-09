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
    <link rel="stylesheet" href="style.css">  
</head>
<body>
  <header class="text-center text-light">
   <h1 class="p-3">My Team</h1>
  </header>

<div class="team">
`)
  for (const employee of res) {
    if (employee.confirmIntern === "Intern") {
      console.log(employee)
    writeFileSync(`./dist/index.html`, `
<div class="card intern" style="width: 18rem;">
<div class="card-header">
${employee.name}
Intern
</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href = "mailto: ${employee.email}">${employee.email}</a></li>
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
${employee.name}
Engineer
  </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item"><a href = "mailto: ${employee.email}">${employee.email}</a></li>
        <li class="list-group-item"><a href="${employee.github}">${employee.github}</a></li>
      </ul>
  </div>
  `, {flag: 'a'})
    } 
    if (employee.confirmManager === "Manager") {
      console.log(employee)
    writeFileSync(`./dist/index.html`, `
<div class="card manager" style="width: 18rem;">
<div class="card-header">
${employee.name}  
Manager
</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href = "mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">${employee.officeNumber}</li>
    </ul>
</div>
`, {flag: 'a'})
    } 
  }

}

// exports generateHTML function from module
module.exports = generateHTML; 
