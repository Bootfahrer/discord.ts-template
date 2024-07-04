import { CommandInteraction, Events } from "discord.js";
import { commands } from "../../commands/commands";

export const name: string = Events.InteractionCreate;

export async function execute(interaction: CommandInteraction) {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
}