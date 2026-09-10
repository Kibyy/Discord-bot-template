const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'join',
    aliases: ['join'],
    description: 'Joins the voice channel',
    execute(message) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('You need to join first');

        joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        message.reply(`Joined**${voiceChannel.name}**`);
    },
};
