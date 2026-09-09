const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a member from the server')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The member to ban')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for the ban'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        try {
            await interaction.guild.members.ban(user, { reason });
            await interaction.reply({ content: `Banned ${user.tag}.\n**Reason:** ${reason}`, ephemeral: false });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Failed to ban this user. Check my permissions', ephemeral: true });
        }
    },
};
