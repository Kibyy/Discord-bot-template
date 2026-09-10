module.exports = {
    name: 'replay',
    aliases: ['restart'],
    description: 'play the current song from the beginning',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');

        queue.seek(0);
        message.reply('replaying the current song');
    },
};
