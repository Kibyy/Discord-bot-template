const { Events } = require('discord.js');
const { getPrefix } = require('../music/prefixManager');
module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot || !message.guild) return;
        const prefix = getPrefix(message.guild.id);
        const mentionPrefix = new RegExp(`^<@!?${message.client.user.id}>`);
        const content = message.content;
        let usedPrefix;
        if (content.startsWith(prefix)) {
            usedPrefix = prefix;
        } else if (mentionPrefix.test(content)) {
            usedPrefix = content.match(mentionPrefix)[0];
        } else {
            return;
        }
        const args = content.slice(usedPrefix.length).trim().split(/ +/);
        const commandName = args.shift()?.toLowerCase();
        if (!commandName) return;
        const command = message.client.musicCommands.get(commandName)
            || message.client.musicCommands.find(cmd => cmd.aliases?.includes(commandName));

        if (!command) return;
        try {
            await command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('Error').catch(() => {});
        }
    },
};
