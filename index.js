const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents:  [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,

    ] });
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login('MTAxODAzODQyNDYxNzM2NTU1NQ.GSjqFm.KmC4nHSblq32Xo0P8pXDDGhbrj-2HQrkjIdcNo');

client.on('messageCreate', (message) =>{
    if(message.author.bot){
        return;
    }
    message.reply("fuck you")
})