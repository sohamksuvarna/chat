const Discord = require("discord.js")
const os = require('os')
const {version: discordVersion} = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.channel.send("Please wait...").then(m => {
        m.delete();
        let pong = m.createdTimestamp - message.createdTimestamp;
    
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }
  let thread = os.cpus().length
  let CPU = os.cpus()[0].model
  let use = formatBytes(process.memoryUsage().heapUsed)
    message.channel.send({embed: {
        color: "#7289da",
        title: "Bot Info:",
        fields: [
          { name: "Username and Discriminator", value: `${client.user.tag}`},
          { name: "Developer", value: `${client.users.cache.get('560484031838552064').tag}`},
          { name: "Stats", value: `Servers: ${client.guilds.cache.size}\nChannels: ${client.channels.cache.size}\nUsers: ${client.users.cache.size}`},
          { name: "Prefix", value: "chat"},
          { name: "Ping", value: `Latency: ${client.ws.ping}ms\nMessage Delay: ${pong}ms`},
          { name: "Uptime", value: `${duration(client.uptime)}`},
          { name: "Operating System", value: `Linux`},
          { name: "Memory Usage", value: `${use}`},
          { name: "Versions", value: `node.js: ${process.version} \ndiscord.js: v${discordVersion}`},
          { name: "CPU Info", value: `Thread Count: ${thread}\nModel: ${CPU}`, inline: true},
        ]
      }
    });
    })
  }

module.exports.config = {
    name: "stats",
    description: "Look at the bot's stats",
    usage: "chat stats",
    accessableby: "Members",
    aliases: ["info", "botinfo", "bi"]
}

function formatBytes (a, b) {
  if (0 == a) return "0 Bytes";
  let c = 1024,
      d = b || 2,
      e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}