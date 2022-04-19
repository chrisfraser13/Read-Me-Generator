// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return(`![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`)
  } else {return "" }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    return(`\n * [License](#license) \n`)
  } else {return "" }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return(`## License 
    This project is licensed under ${license}`)
  } else {return "" }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  ## Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Questions
  If you have any questions or comments, contact me through GitHub. Username: 
  ${data.github}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
