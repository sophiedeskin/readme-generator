// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (`${data.license}` === "Apache"){
    return `![licenseBadge](https://img.shields.io/badge/license-${data.license}-red.svg)`

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  return `
 
## :wave: ${data.projectTitle} :wave:

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Use](#use)
- [License](#license)
- [Contributors](#contributors)
- [Testing](#tests)
- [Questions](#questions)
- [additionalInfo](#AdditionalInfo)

## Installation
Here is the installation process: ${data.installation}

## Use
${data.use}

## License
The license covering this project: ${data.license} ![licenseBadge]

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
