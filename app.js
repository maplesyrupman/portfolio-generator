const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

fs.writeFile('new.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Complete');
})

