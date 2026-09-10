module.exports = {
    name: 'shuffle',
    aliases: ['randomize'],
    description: 'shuffles the order of the queue',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');

        queue.shuffle();
        message.reply('queue shuffled');
    },
};
