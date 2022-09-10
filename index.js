const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const twilioClient = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});
const client = new Client({ intents:  [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
    ] });
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

client.on('messageCreate', (message) =>{
    if(message.author.bot){
        return;
    }
    message.reply(message.content)
    let random = Math.floor(Math.random() * 6);
    console.log(random);
        if(random === 2){
        twilioClient.messages.
        create({
            body: message.content,
            from: '+15737875205',
            to: '+14344217028'
          })
         .then(message => console.log(message.sid));
    }

   
})