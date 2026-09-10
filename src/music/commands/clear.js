module.exports = {
    name: 'clear',
    aliases: ['clear'],
    description: 'Clears the queue',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('Nothing on playing');
        queue.songs.splice(1);
        message.reply('Cleared');
    },
};
