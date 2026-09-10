const { Events } = require('discord.js');
<<<<<<< HEAD

=======
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}`);
        console.log('Bot is online and commands are loaded.');
    },
};
