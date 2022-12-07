// takes writeFileSync from the fs module
const {writeFileSync} = require('fs')
const Manager = require('../lib/Manager')

// function to generate team HTML page using the data that is passed through
function generateHTML(res) {
  for (const employee of res) {
    if (employee.school !== null) {
    writeFileSync(`./dist/index.html`, `${employee}`)
    } 
    else if (employee.github !== null) {
    writeFileSync(`./dist/index.html`, `${employee}`)
    } 
    else if (employee.officeNumber !== null) {
    writeFileSync(`./dist/index.html`, `${employee}`)
    } 
  }




 

}

// exports generateHTML function from module
module.exports = generateHTML; 
