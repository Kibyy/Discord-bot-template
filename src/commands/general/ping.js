const { SlashCommandBuilder } = require('discord.js');
<<<<<<< HEAD

=======
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check bot latency'),
    async execute(interaction) {
<<<<<<< HEAD
        await interaction.reply(`Pong! 🏓 ${interaction.client.ws.ping}ms`);
=======
        await interaction.reply(`Pong! ${interaction.client.ws.ping}ms`);
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
    },
};
