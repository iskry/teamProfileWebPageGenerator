// takes writeFileSync from the fs module
const {writeFileSync} = require('fs')

// function to generate team HTML page using the data that is passed through
function generateHTML(res) {
  console.log(res)
  writeFileSync(`./dist/index.html`, ``)
}
// exports generateHTML function from module
module.exports = generateHTML; 
