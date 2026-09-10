module.exports = {
    name: 'remove',
    aliases: ['remove'],
    description: 'remove a song from the queue by position, e.g., remove 2',
    execute(message, args) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');

        const position = parseInt(args[0]);
        if (!position || position < 1 || position >= queue.songs.length) {
            return message.reply('please provide a valid position in the queue');
        }

        const removida = queue.songs[position];
        queue.songs.splice(position, 1);
        message.reply(`removed **${removida.name}** from the queue`);
    },
};
