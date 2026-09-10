module.exports = {
    name: 'queue',
    aliases: ['queue', 'q'],
    description: 'show the current music queue',
    execute(message) {
        const queue = message.client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply('the queue is empty');

        const lista = queue.songs
            .slice(0, 15)
            .map((song, i) => `${i === 0 ? 'playing now ->' : `${i}.`} ${song.name} - ${song.formattedDuration}`)
            .join('\n');

        const resto = queue.songs.length > 15 ? `\n... and ${queue.songs.length - 15} more songs` : '';

        message.reply(`**current queue**\n${lista}${resto}`);
    },
};
