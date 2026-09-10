module.exports = {
    name: 'play',
    aliases: ['p', 'play'],
    description: 'Play a song or playlist, accepts YouTube, Spotify, SoundCloud links or just the name to search',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('Join a voice channel first');
        }
        if (!args.length) {
            return message.reply('Provide the name or link of the song after the command');
        }
        const query = args.join(' ');
        try {
            await message.client.distube.play(voiceChannel, query, {
                member: message.member,
                textChannel: message.channel,
                message,
            });
        } catch (error) {
            console.error(error);
            message.reply('nao consegui tocar isso, tenta outro link ou nome');
        }
    },
};
