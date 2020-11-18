module.exports.run = (client, message, args, Discord) => {
    message.channel.send(':ping_pong: Pong!').then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp;
        let em = new Discord.MessageEmbed()
        .setColor(`#7289da`)
        .setDescription(`Bot Latency: \`${client.ws.ping}ms\`\nMessage Delay: \`${ping}ms\``);
        m.edit(em);
    
    })
}

module.exports.config = {
    name : "ping",
    description: "Get the bot's latency",
    usage: "chat ping",
    accessableBy: "Members",
    aliases: ["latency"]
}