module.exports.run = (client, message, args) => {
    let content = args.join(" ");
    let reverse = [... content].reverse().join("");
    message.channel.send(reverse)
}

module.exports.config = {
    name: "reverse",
    description: "Reverse some text",
    usage: "chat reverse <text>",
    accessableBy: "Members",
    aliases: ['reverse']
}