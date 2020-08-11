const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."

try {

    client.on("message", (message) => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === '.') {
            message.delete();
            message.guild.members.array().forEach(x => x.send('тест'))
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                message.delete();
                return message.reply("блять?").then(msg => {
                    msg.delete(5500)
                });
            }
            const msgc = args.slice(0).join(' ')
            message.guild.members.forEach(m => {
                m.sendMessage(msgc)
                    .catch(не получилось кинуть ${m.nickname});
            });
            message.reply(пошел нахуй!).then(msg => {
                msg.delete(5500)
            });
        }
    });

} catch (err) {
    console.log("������")
}

client.login("NzQwOTA1MjkwNTAwODAwNTMz.Xyvz0g.Rp0o1mdmIGDwuDQjquWc2vl14xs");
