module.exports.run = (client, message, args) => {
    if (!args[0]) return message.channel.send('You are what?')
    message.channel.send(`You are ${Math.floor(Math.random() * 100)}% ${args.join(" ")}`)
}

module.exports.config = {
    name: "are",
    description: "Check how much % are you something",
    usage: "chat are <something>",
    accessableBy: "Members",
    aliases: ["am"]
}