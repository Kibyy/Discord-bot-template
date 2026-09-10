const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { createDistube } = require('./music/distube');
const { registerDistubeEvents } = require('./music/distubeEvents');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
    ]
});
client.commands = new Collection();
client.musicCommands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const folders = fs.readdirSync(foldersPath);
for (const folder of folders) {
    const commandsPath = path.join(foldersPath, folder);
    const files = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of files) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[!] Command at ${filePath} is missing "data" or "execute"`);
        }
    }
}
const eventsPath = path.join(__dirname, 'events');
const musicPath = path.join(__dirname, 'music', 'commands');
const musicFiles = fs.readdirSync(musicPath).filter(file => file.endsWith('.js'));
for (const file of musicFiles) {
    const filePath = path.join(musicPath, file);
    const command = require(filePath);
    if ('name' in command && 'execute' in command) {
        client.musicCommands.set(command.name, command);
    } else {
        console.log(`[!] Music command at ${filePath} is missing "name" or "execute"`);
    }
}
client.distube = createDistube(client);
registerDistubeEvents(client.distube);
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}
client.login(process.env.TOKEN);
