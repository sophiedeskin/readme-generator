// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if user chose apache return a red badge
  if (license === "Apache"){
    return `![licenseBadge](https://img.shields.io/badge/license-${license}-red.svg)`
  }
  //if user chose ISC return green badge
  else if (license === "ISC") {
    return `![licenseBadge](https://img.shields.io/badge/license-${license}-green.svg)`
  }
    //if user chose MIT return orange badge
  else if (license === "MIT") {
    return `![licenseBadge](https://img.shields.io/badge/license-${license}-orange.svg)`
  }
    //if user chose OBSD return yellow badge
  else if (license === "OBSD") {
    return `![licenseBadge](https://img.shields.io/badge/license-${license}-yellow.svg)`
  }
  //if user selected none return an empty string
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  return `
  ${renderLicenseBadge(data.license)}  
 
## :wave: ${data.projectTitle} :wave:

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Use](#use)
- [License](#license)
- [Contributors](#contributors)
- [Testing](#Testing)
- [Questions](#Questions)
- [AdditionalInfo](#AdditionalInfo)

## Installation
Here is the installation process: ${data.installation}

## Use
${data.use}

## License
The license covering this project: 
${data.license}
${renderLicenseBadge(data.license)}
## Contributors
:family: ${data.contributing} is/are contributing to the project

## Testing
${data.tests} testing included

## Questions
What to do if you have an issue: ${data.questions}

## AdditionalInfo
- Github: (https://github.com/${data.username}) :office:
- Email: ${data.email} :envelope:
`;
}

module.exports = generateMarkdown;
