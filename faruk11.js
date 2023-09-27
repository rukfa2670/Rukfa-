const Twilio = require("twilio");

const client = new Twilio("")

client.messages 
.list()
.then(messages => console.log('the most  recent message is ${messages[0].body}')
).catch(err => console.error(err));

console.log('Gathering your message log'); 

