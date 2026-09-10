// aqui fica so a parte de avisar no canal de texto o que ta acontecendo
// com a fila, cada evento do distube vira uma mensagem simples
function registerDistubeEvents(distube) {
    distube
        .on('playSong', (queue, song) => {
            queue.textChannel?.send(`tocando agora: **${song.name}** (${song.formattedDuration})`);
        })
        .on('addSong', (queue, song) => {
            queue.textChannel?.send(`adicionou **${song.name}** na fila`);
        })
        .on('addList', (queue, playlist) => {
            queue.textChannel?.send(`adicionou a playlist **${playlist.name}** com ${playlist.songs.length} musicas`);
        })
        .on('error', (channel, error) => {
            console.error(error);
            channel?.send('deu ruim tocando isso, tenta outro link ou nome');
        })
        .on('empty', channel => {
            channel?.send('canal de voz ficou vazio, saindo');
        })
        .on('finish', queue => {
            queue.textChannel?.send('a fila acabou');
        })
        .on('disconnect', queue => {
            queue.textChannel?.send('desconectei do canal de voz');
        })
        .on('initQueue', queue => {
            queue.autoplay = false;
            queue.volume = 100;
        });
}

module.exports = { registerDistubeEvents };
