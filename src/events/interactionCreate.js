const { Events } = require('discord.js');
<<<<<<< HEAD

=======
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
<<<<<<< HEAD

        const command = interaction.client.commands.get(interaction.commandName);

=======
        const command = interaction.client.commands.get(interaction.commandName);
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
        if (!command) {
            console.error(`No this command is not available: ${interaction.commandName}`);
            return;
        }
<<<<<<< HEAD

=======
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command',
                ephemeral: true
            });
        }
    },
};
