const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  client.change_presence(game=discord.Game(name='Lul');  
  console.log('I am ready!');
  
});

client.on('message', message => {
    if (message.content === 'vert') {
    	message.reply('Siusiaczek');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
