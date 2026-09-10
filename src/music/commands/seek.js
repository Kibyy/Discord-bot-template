module.exports = {
    name: 'seek',
    aliases: ['seek'],
    description: 'jumps to a specific time in the song in seconds',
    execute(message, args) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');

        const segundos = parseInt(args[0]);
        if (isNaN(segundos) || segundos < 0) {
            return message.reply('please provide a valid time in seconds, e.g., seek 30');
        }

        queue.seek(segundos);
        message.reply(`jumped to second ${segundos}`);
    },
};
