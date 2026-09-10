const { PermissionFlagsBits } = require('discord.js');
const { setPrefix } = require('../prefixManager');
module.exports = {
    name: 'setprefix',
    aliases: ['prefix'],
    description: 'changes prefix',
    execute(message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply('only admins can change the prefix');
        }
        const novoPrefixo = args[0];
        if (!novoPrefixo || novoPrefixo.length > 5) {
            return message.reply('please provide a valid prefix, up to 5 characters');
        }
        setPrefix(message.guild.id, novoPrefixo);
        message.reply(`prefix changed to \`${novoPrefixo}\``);
    },
};
