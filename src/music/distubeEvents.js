function registerDistubeEvents(distube) {
    distube
        .on('playSong', (queue, song) => {
            queue.textChannel?.send(`Now playing: **${song.name}** (${song.formattedDuration})`);
        })
        .on('addSong', (queue, song) => {
            queue.textChannel?.send(`Added **${song.name}** to the queue`);
        })
        .on('addList', (queue, playlist) => {
            queue.textChannel?.send(`Added **${playlist.name}** with ${playlist.songs.length} songs`);
        })
        .on('error', (channel, error) => {
            console.error(error);
            channel?.send('Error');
        })
        .on('empty', channel => {
            channel?.send('Afk for too long, leaving');
        })
        .on('finish', queue => {
            queue.textChannel?.send('Queue Ended');
        })
        .on('disconnect', queue => {
            queue.textChannel?.send('Disconnected');
        })
        .on('initQueue', queue => {
            queue.autoplay = false;
            queue.volume = 100;
        });
}
module.exports = { registerDistubeEvents };
