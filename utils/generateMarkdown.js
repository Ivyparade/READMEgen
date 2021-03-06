

function generateMarkdown(data, userData) {
  return `
# ${data.title}
![](https://img.shields.io/github/last-commit/${data.username}/${data.title})

## Description

${data.description}

## Table of Contents

[Installation](#Installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[FAQ](#questions-and-answers)

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contribute}

## Tests


## Questions and Answers

### Who wrote this?

${userData.realName}
![](${userData.avatar})
${data.email}


`;
}

module.exports = {generateMarkdown: generateMarkdown};
