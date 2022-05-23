const fs = require('fs');
const rStream = fs.createReadStream('./01-read-file/text.txt', 'utf-8');
let data = '';

rStream.on('data', chunc => data += chunc);
rStream.on('end', () => console.log('End', data));
rStream.on('error', error => console.log('Error', error.message));