module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    description: 'Loop a song',
    execute(message, args) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('Not playing anything');

        const modo = args[0]?.toLowerCase();
        const modos = { off: 0, song: 1, musica: 1, queue: 2, fila: 2 };

        if (!(modo in modos)) {
            return message.reply('You can choose to loop a song or queue');
        }

        queue.setRepeatMode(modos[modo]);
        message.reply(`Loop mode: ${modo}`);
    },
};
