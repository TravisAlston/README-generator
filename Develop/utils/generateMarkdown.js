// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `Goobtied goop
    `
  }
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
  ${data.description}
  ${data.contents}
  ${data.installation}
  ${data.usage}
  ${data.credits}
  ${renderLicenseBadge(data.license)}
  ${data.test}
  ${data.GitHub}
  ${data.email}
  

`;
}

module.exports = generateMarkdown;
