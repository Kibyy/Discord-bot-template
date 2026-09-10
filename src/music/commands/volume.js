module.exports = {
    name: 'volume',
    aliases: ['vol'],
    description: 'shows or adjusts the volume from 0 to 100',
    execute(message, args) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('there is nothing playing now');
        if (!args[0]) return message.reply(`current volume: ${queue.volume}`);
        const volume = parseInt(args[0]);
        if (isNaN(volume) || volume < 0 || volume > 100) {
            return message.reply('please provide a number between 0 and 100');
        }
        queue.setVolume(volume);
        message.reply(`volume adjusted to ${volume}`);
    },
};
