module.exports = {
    name: 'nowplaying',
    aliases: ['np', 'playing'],
    description: 'Show the current playing song',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('Not playing anything');

        const song = queue.songs[0];
        message.reply(`Now playing: **${song.name}** (${song.formattedDuration}) requested by ${song.user}`);
    },
};
