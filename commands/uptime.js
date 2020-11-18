module.exports.run = (client, message, args) => {
    let ms = require('parse-ms');
    let time = ms(client.uptime);
    message.channel.send(`I have been online for \`${time.days}\` days, \`${time.hours}\` hours, \`${time.minutes}\` minutes, \`${time.seconds}\` seconds`)
}

module.exports.config = {
    name: "uptime",
    description: "Check for how long has the bot been online",
    usage: "chat uptime",
    accessableBy: "Members",
    aliases: ["ut"]
}