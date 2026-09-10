const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all available commands'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Bot Help')
            .setDescription('Available commands:')
            .addFields(
<<<<<<< HEAD
                { name: '🛠 Moderation', value: '`/ban`, `/kick`, `/warn`' },
                { name: '🌐 General', value: '`/ping`, `/help`' },
            )
            .setTimestamp()
            .setFooter({ text: 'Template' });

=======
                { name: 'Moderation', value: '`/ban`, `/kick`, `/warn`' },
                { name: 'General', value: '`/ping`, `/help`' },
                { name: 'Music', value: 'Use the prefix or mention the bot, try `musichelp` for the full list' },
            )
            .setTimestamp()
            .setFooter({ text: 'Template' });
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
        await interaction.reply({ embeds: [embed] });
    },
};
