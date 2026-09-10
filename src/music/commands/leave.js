module.exports = {
    name: 'leave',
    aliases: ['disconnect', 'dc'],
    description: 'Leaves the voice channel',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('Not in any voice channel');

        queue.stop();
        message.reply('Bye');
    },
};
