const owner = "560484031838552064"

module.exports.run = async (client, message, args, Discord, fs) => {
if (message.author.id !== owner) return message.channel.send('You can\'t use this command');

    let cmdUsage = client.commands.get('eval', 'help.usage');

    try {
        const code = args.join(' ');
        if (!code) return message.channel.send(`Please provide some code to eval!`)
        let evaled = eval(code);

        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

        await message.channel.send(clean(evaled).replace(client.token, "TOKEN"), { code: 'js' });
    } catch (err) {
        await message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

module.exports.config = {
    name: "eval",
    description: "Evaluate some code",
    usage: "chat eval <code>",
    accessableby: "Bot Owner",
    aliases: ["ev"]
}

const clean = text => {
    if (typeof(text) === 'string') return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
};