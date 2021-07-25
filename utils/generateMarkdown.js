const backticks = "```"
function getLicenseBadge(license) {

  if(license === "MIT") return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  
  else if(license === "APACHE 2.0") return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
 
  else if(license === "GPL 3.0") return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
 
  else if(license === "BSD 3") return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
   
 else if(license === "NONE")  return "";
}

function getLicenseLink(license) {
  if(license === "MIT") return "(https://opensource.org/licenses/MIT)";

  else if(license === "APACHE 2.0") return "(https://opensource.org/licenses/Apache-2.0)";
   
  else if(license === "GPL 3.0") return "(https://www.gnu.org/licenses/gpl-3.0)";
 
  else if(license === "BSD 3") return "(https://opensource.org/licenses/BSD-3-Clause)";
 
  else if(license === "NONE") return "";
}

function getLicenseSection(license) {
  if(license === "MIT"){
    return `## License

    This project is licensed under the MIT license.

    `
  }

 else if(license === "APACHE 2.0"){
  return `## License

  This project is licensed under the Apache license.

  `
  }
  else if(license === "GPL 3.0"){
    return `## License

    This project is licensed under the GPL license.


    `
  }
 else if(license === "BSD 3"){
  return `## License

  This project is licensed under the BSD license.

  `
  }

  else if (license === "NONE"){
    return `## License
    
    `
  }
}

function generateMarkdown(data) {
  const badge = getLicenseBadge(data.license);
  const links = getLicenseLink(data.license)
  const section = getLicenseSection(data.license);
  return `# ${data.title}

  ${badge}${links}
  ## Description
  ${data.description}

  ## Installation
  ${backticks}
  ${data.installation}
  ${backticks}

  ## Usage
  ${data.usage}

  ## Test
  ${backticks}
  ${data.test}
  ${backticks}

  ## Contact

  If you have any questions about this repository, open an issue or contact me directly at ${data.email}. 
  
  You can find more of my work at https://github.com/${data.github}

  ${section}

`;
}

module.exports = generateMarkdown;
