// { <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>}
const fs=require("fs");
const inquirer = require("inquirer");
const jest = require('jest');
const shape = require("./lib/shape");

const generateSVG = ({text, textColor, shape, shapecolor}) => {
    `<?xml version="1.0" standalone="no"?>
     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <${shape} cx="150" cy="100" r="80" fill="${shapecolor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
     
    </svg>`  }

inquirer
.prompt([
    {
type: 'input',
name: 'text',
message: 'Input image text',
},
{
   type: 'checkbox',
   name: 'list',
   message: 'What color is your shape going to be?', 
   choices: ['white', 'black', 'green', 'red', 'blue',]
},
{
    type: 'list',
    name: 'textcolor',
    message: 'What color is your text? ',
    choices: ['white','green', 'blue', 'red', 'black'],

},
{
    type: 'list',
    name: 'shape',
    message: 'What shape do you want?',
    choices: ['square', 'rectangle', 'circle', 'triangle',]
},
])
    .then((answers) => 
    fs.writeFile('logo.svg', generateSVG(answers)))
    .then(() => console.log('Successfully wrote a svg file!'))
    .catch((err) => console.error(err));
    



