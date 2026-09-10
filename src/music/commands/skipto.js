module.exports = {
    name: 'skipto',
    aliases: ['st', 'skipto'],
    description: 'skips to a specific position in the queue, e.g., skipto 3',
    execute(message, args) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');
        const position = parseInt(args[0]);
        if (!position || position < 1) {
            return message.reply('please provide a valid position in the queue, e.g., skipto 3');
        }
        try {
            queue.jump(position);
            message.reply(`skipping to song number ${position}`);
        } catch {
            message.reply('this position does not exist in the queue');
        }
    },
};
