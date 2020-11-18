const Chat = require('./Base/Chat');
const client = new Chat({
    disableMentions: 'all'
});
const Discord = require('discord.js');

client.on('ready', () => {
    console.log(`${client.user.tag} is ready | ${client.guilds.cache.size} servers, ${client.users.cache.size} users`)
    let array = [{name: `${client.users.cache.size} users chat`, type:"WATCHING"}, {name: "chat help", type: "WATCHING"}, {name: `${client.guilds.cache.size} servers`, type: "WATCHING"}]
    let random = Math.floor(Math.random() * array.length);
    setInterval(() => {
      client.user.setPresence({activity: {name: array[random].name, type: array[random].type}, status: 'idle'})
    }, 10000)
})

client.on("guildCreate", (guild) => {
    let found = 0;
    guild.channels.cache.map((channel) => {
        if (found === 0) {
          if (channel.type === "text") {
            if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {
              if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {
                if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {
                const embed = new Discord.MessageEmbed()
                .setAuthor("Chat", client.user.avatarURL())
                .setDescription(`Hey there! I am **Chat**, an AI Powered Chat Bot for Discord\n\nTo get started, send \`chat help\`\n\nHow to chat with me?\n• Send \`chat <message>\`\n• Set a custom chat channel using \`chat setchatchannel <channel>\`\n\nJoin my [support server](https://discord.gg/mKyRmPB)`)
                .setColor("#7289da")
                .setFooter("Have fun chatting with me!")
                channel.send(embed);
                found = 1;
                }
             }
            }
          }
        }
      });
   
  })


const fs = require('fs');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    return console.log("Commands not found!");
  }
  
  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    client.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      client.aliases.set(alias, pull.config.name);
    });
  });
});

client.on('message', (message) => {
    if (message.author.bot) return;
  if (message.channel.id === client.db.get(`channel_${message.guild.id}`)) {
    let msg = encodeURIComponent(message.content)
    client.fetch(`https://api.shadeoxide.gq/api/chatbot?message=${msg}&name=Chat&user=${message.author.id}&gender=male`)
    .then(res => res.json())
    .then(data => message.channel.send(data.message))
  }  
})

client.on('message', (message) => {
    if (message.author.bot || !message.guild) return;
    let prefix = 'chat';
    if (!message.content.startsWith(prefix)) return;
    let messageArray = message.content.slice(prefix.length + 1).split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (commandFile) commandFile.run(client, message, args, Discord, fs)
    if (!commandFile) {
        let msg = encodeURIComponent(message.content.slice(prefix.length + 1))
        client.fetch(`https://api.shadeoxide.gq/api/chatbot?message=${msg}&name=Chat&user=${message.author.id}&gender=male`)
        .then(res => res.json())
        .then(data => message.channel.send(data.message))
    }
})

client.run()