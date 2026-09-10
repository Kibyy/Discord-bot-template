const { getPrefix } = require('../prefixManager');
module.exports = {
    name: 'musichelp',
    aliases: ['mhelp', 'commands'],
    description: 'List available music commands',
    execute(message) {
        const prefix = getPrefix(message.guild.id);
        const comandos = [...message.client.musicCommands.values()];
        const lista = comandos
            .map(cmd => `**${prefix}${cmd.name}** - ${cmd.description}`)
            .join('\n');
        message.reply(`**music commands**\ncurrent prefix: \`${prefix}\` (or just @ the bot)\n\n${lista}`);
    },
};
