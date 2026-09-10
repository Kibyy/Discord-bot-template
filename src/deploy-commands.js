const { REST, Routes } = require('discord.js');
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
<<<<<<< HEAD

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const folders = fs.readdirSync(foldersPath);

=======
const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const folders = fs.readdirSync(foldersPath);
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
for (const folder of folders) {
    const commandsPath = path.join(foldersPath, folder);
    const files = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of files) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        }
    }
}
<<<<<<< HEAD

const rest = new REST().setToken(process.env.TOKEN);

=======
const rest = new REST().setToken(process.env.TOKEN);
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
(async () => {
    try {
        console.log(`Refreshing ${commands.length} slash commands...`);

        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} commands.`);
    } catch (error) {
        console.error(error);
    }
})();
