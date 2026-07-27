const fs = require('fs');
const content = fs.readFileSync('node_modules/tech-stack-icons/dist/index.d.ts', 'utf8');
console.log(content);
