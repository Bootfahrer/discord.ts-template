import { Client, Events } from "discord.js";
import { deployCommands } from "../../deploy-commands";

export const name:string = Events.ClientReady;
export const once:boolean = true;

export async function execute (client: Client){
    const guild_ids = client.guilds.cache.map(guild => guild.id)
    
    guild_ids.map(async id => {
        await deployCommands({guildId: id})

        console.log(`Bot ready and online for Guild ${id}`);
    })
}