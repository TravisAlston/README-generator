// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `\r[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == 'Mozilla') {
    return `\r[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license == 'Open Data Commons') {
    return `\r[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
  } else if (license == 'IBM') {
    return `\r[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else (license == 'none')
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description

  ${data.description}

  # Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [GitHub Info](#GitHub) 
  - [Email Info](#Email)

  # Instalation
  ${data.installation}

  # Usage

  ${data.usage}

  # Contributors
  ${data.credits}

  # Licence

  ${renderLicenseBadge(data.license)}

  # Test

  ${data.test}

  # GitHub

  ${data.GitHub}

  # Email

  ${data.email}
  

`;
}

module.exports = generateMarkdown;
