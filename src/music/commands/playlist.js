const { savePlaylist, getPlaylist, listPlaylists, deletePlaylist } = require('../playlistManager');

module.exports = {
    name: 'playlist',
    aliases: ['pl'],
    description: 'manage your playlists, use playlist save name, playlist load name, playlist list, or playlist delete name',
    async execute(message, args) {
        const sub = args[0]?.toLowerCase();
        const nome = args.slice(1).join(' ');

        if (sub === 'save') {
            const queue = message.client.distube.getQueue(message.guild.id);
            if (!queue) return message.reply('there is no queue playing to save');
            if (!nome) return message.reply('enter a name, like playlist save mymusic');

            const musicas = queue.songs.map(song => song.url);
            savePlaylist(message.author.id, nome, musicas);
            return message.reply(`playlist **${nome}** saved with ${musicas.length} songs`);
        }

        if (sub === 'load') {
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) return message.reply('join a voice channel first');
            if (!nome) return message.reply('enter the playlist name to load');

            const musicas = getPlaylist(message.author.id, nome);
            if (!musicas) return message.reply('could not find that playlist');

            for (const url of musicas) {
                await message.client.distube.play(voiceChannel, url, {
                    member: message.member,
                    textChannel: message.channel,
                    message,
                });
            }
            return message.reply(`loading playlist **${nome}**`);
        }

        if (sub === 'list') {
            const playlists = listPlaylists(message.author.id);
            if (!playlists.length) return message.reply('you have not saved any playlists yet');
            return message.reply(`your playlists: ${playlists.join(', ')}`);
        }

        if (sub === 'delete') {
            if (!nome) return message.reply('enter the playlist name to delete');
            const apagou = deletePlaylist(message.author.id, nome);
            return message.reply(apagou ? `playlist **${nome}** deleted` : 'could not find that playlist');
        }

        message.reply('use it like this: playlist save name, playlist load name, playlist list, or playlist delete name');
    },
};
