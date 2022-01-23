#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const path = require("path");

const argv = process.argv[0];

var dirPath = path.join(process.cwd() ,"testCli");
var ReadFilePath = path.join(__dirname , "../project")
fs.mkdirSync(dirPath)

const files = ["index.js" , "package.json"]

files.map((file)=>{
    var data = fs.readFileSync(`${ReadFilePath}/${file}`);
    fs.writeFileSync(`${dirPath}/${file}` ,data);
    console.log(`${file} saved`);
})



