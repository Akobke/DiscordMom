const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});
const client = new Client({ intents:  [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,

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
    message.reply("fuck you")
})