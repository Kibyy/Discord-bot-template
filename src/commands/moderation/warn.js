const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Warns a member')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The member to warn')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for the warn'))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';

<<<<<<< HEAD
        // Connect a database (SQLite for example) to track warns per user
=======
        // Connect a database (SQLite for example) to track warns
        // Conecta um SQL pra salvar os warn por usario
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)

        await interaction.reply({
            content: `Warned ${user}!\n**Reason:** ${reason}\n\n*(Warns aren't saved in this template)*`,
            ephemeral: false
        });
    },
};
