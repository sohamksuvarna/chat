module.exports.run = (client, message, args, Discord) => {
    const em = new Discord.MessageEmbed()
    .setTitle('Invite Links')
    .setDescription("Invite Chat to your server!")
    .addField("Invite (Administrator Permissions)", "[Click Here](https://discord.com/api/oauth2/authorize?client_id=688305812015153192&permissions=8&scope=bot)")
    .addField("Invite (Required Permissions)", "[Click Here](https://discord.com/oauth2/authorize?client_id=688305812015153192&permissions=346176&scope=bot)")
    .addField("Invite (No Permissions)", "[Click Here](https://discord.com/api/oauth2/authorize?client_id=688305812015153192&permissions=0&scope=bot)")
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL())
    .setColor("#7289da")
    message.channel.send(em)
}

module.exports.config = {
    name: "invite",
    description: "Invite Chat to your server!",
    usage: "chat invite",
    accessableBy: "Members",
    aliases: ["inv", "add"]
}