module.exports = {
    name: 'resume',
    aliases: ['unpause'],
    description: 'continua a musica que ta pausada',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');
        if (!queue.paused) return message.reply('it is already playing');

        queue.resume();
        message.reply('resumed the song');
    },
};
