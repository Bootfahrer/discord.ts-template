import { Client } from "discord.js";
import { config } from "./config";

import path from 'path'
import fs from 'fs'

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

///
///<--- EVENT HANDLER --->
///
const eventsFolderPath: string = path.join(__dirname, 'events')
const eventsFolder: any = fs.readdirSync(eventsFolderPath)

for (const folder of eventsFolder) {
    const eventsPath: string = path.join(eventsFolderPath, folder)
    const eventFiles: any = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts'));

    for (const file of eventFiles) {
        const filePath: string = path.join(eventsPath, file);
        const event = require(filePath);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}

client.login(config.DISCORD_TOKEN);