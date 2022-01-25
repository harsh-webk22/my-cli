#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const path = require("path");
const { isBuffer } = require("util");

const argv = process.argv[2];

if(!argv){
    console.log("Please provide file path");
    return;
}

var projectName;
switch(argv){
    case ".":
        projectName = "";
        break;
    default:
        projectName = argv;
        break;
}

console.log(projectName);


var dirPath = path.join(process.cwd() ,projectName);
var ReadFilePath = path.join(__dirname , "../project")

if(argv !== ""){
    fs.mkdirSync(dirPath);
}


const files = ["index.js" , "package.json", "package-lock.json"];

files.map((file)=>{
    var data = fs.readFileSync(`${ReadFilePath}/${file}`);
    fs.writeFileSync(`${dirPath}/${file}` ,data);
    console.log(`${file} saved`);
})



