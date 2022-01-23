#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const utils = require("./utils");

const argv = yargs.argv

fs.mkdirSync(`$${process.cwd()}/testCli`);
const data = fs.readFileSync(`${__dirname}/utils.js`)
fs.writeFileSync(`${process.cwd()}/testCli/demo.js` ,data);

console.log("Saved!");