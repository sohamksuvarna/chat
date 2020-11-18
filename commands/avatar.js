module.exports.run = (client, message, args, Discord) => {
    let user;
    if (!args.join(" ")) user = message.author;
    if (args.join(" ")) user = client.users.cache.get(args[0]) || client.users.cache.find(m => m.tag.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.find(m => m.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.find(m => m.username.toLowerCase().includes(args.join(" ").toLowerCase()));
    if (!user) user = message.author
    let em = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle(`Avatar of ${user.tag}`)
    .setThumbnail(user.defaultAvatarURL)
    .setImage(user.avatarURL({dynamic: true, size: 2048}))
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL())
    .setTimestamp()
    .setColor(`#7289da`)
    message.channel.send(em)
}

module.exports.config = {
    name: "avatar",
    description: "Get someone's avatar",
    usage: "chat avatar [user]",
    accessableBy: "Members",
    aliases: ["av"]
}