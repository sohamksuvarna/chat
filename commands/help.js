module.exports.run = (client, message, args, Discord) => {
    let em = new Discord.MessageEmbed()
    .setTitle(`Commands [${client.commands.size}]`)
    .setDescription(`Use \`chat help <command>\` to get detailed information on the command\n\n\`${client.commands.map(m => m.config.name).join("`, `")}\``)
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL())
    .setTimestamp()
    .setColor('#7289da');

    if (!args[0]) return message.channel.send(em);
    let command = client.commands.get(args[0].toLowerCase())
    if (!command) return message.channel.send(em);

    if (command) {
    let em = new Discord.MessageEmbed()
    .setTitle(`Command Info`)
    .setDescription(`Parameters with \`<>\` are compulsory and those with \`[]\` are optional`)
    .addField('Name', command.config.name, true)
    .addField('Description', command.config.description, true)
    .addField('Usage', command.config.usage, true)
    .addField('Accessable By', command.config.accessableBy, true)
    .addField('Aliases', command.config.aliases, true)
    .setColor("#7289da")
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL())
    .setTimestamp()
    message.channel.send(em)
}    
}

module.exports.config = {
    name: "help",
    description: "Get help with the bot's commands",
    usage: "chat help [command]",
    accessableBy: "Members",
    aliases: ["h"]
}