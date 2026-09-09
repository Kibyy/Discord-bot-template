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
                { name: '🛠 Moderation', value: '`/ban`, `/kick`, `/warn`' },
                { name: '🌐 General', value: '`/ping`, `/help`' },
            )
            .setTimestamp()
            .setFooter({ text: 'Template' });

        await interaction.reply({ embeds: [embed] });
    },
};
