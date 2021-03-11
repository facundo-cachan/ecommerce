const chalk = require("chalk"),
  logColor = "blue";

export default (color: string, txt: string | number | object) => console.log(chalk.keyword(color != undefined ? color : logColor)(typeof txt == "object" ? JSON.stringify(txt, null, 2) : txt));
