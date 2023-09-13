//package.json is a folder which will have all the dependencies
//of all the packages installed from npm
import chalk from 'chalk';
// console.log(chalk.blue.underline.inverse("Hello World!!"));
// console.log(chalk.green.underline.inverse("success!!"));
// console.log(chalk.red.underline.inverse("false!!"));

import validator from 'validator';
const res = validator.isEmail('BloodX@BloodX.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));