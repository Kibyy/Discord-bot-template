module.exports = {
    name: 'pause',
    aliases: ['pause'],
    description: 'Pause the current song',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('Not playing anything');
        if (queue.paused) return message.reply('Already paused');
        queue.pause();
        message.reply('Paused');
    },
};
