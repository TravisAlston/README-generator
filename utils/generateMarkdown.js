
function renderLicenseBadge(license) {
  console.log('you made it this far', license);
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
