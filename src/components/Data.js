import data from './teacher.json'
const fs = require("fs")
const path = require("path");
const relativePath = "./teacher.json";

// const filePath = path.join("components", 'teacher.json');

// Read the JSON file
const jsonData = fs.readFileSync('./teacher.json', { encoding: 'utf8', flag: 'r' });

// Parse the JSON data into a JavaScript object
const dataObject = JSON.parse(jsonData);
export default dataObject;