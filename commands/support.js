module.exports.run = (client, message, args) => {
    message.channel.send('Join my support server: https://discord.gg/mKyRmPB')
}

module.exports.config = {
    name: "support",
    description: "Get the link of Chat's support server",
    usage: "chat support",
    accessableBy: "Members",
    aliases: ["server"]
}