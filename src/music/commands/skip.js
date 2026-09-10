module.exports = {
    name: 'skip',
    aliases: ['s', 'skip'],
    description: 'skips to the next song in the queue',
    async execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');
        try {
            await queue.skip();
            message.reply('skipped to the next song');
        } catch (error) {
            message.reply('this is the last song in the queue');
        }
    },
};
