const jwt = require('jsonwebtoken');
 
const privateKey = process.env.PRIVATE_KEY;
 
const base64Payload = process.argv[2];
const jsonString = Buffer.from(base64Payload, 'base64').toString('utf8');
 
// Parse to object
const payload = JSON.parse(jsonString);
 
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
console.log(token);
