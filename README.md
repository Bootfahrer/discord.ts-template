### A Discord.ts Template

## Getting started

In Order to getting start you just have to add create an .env file.
There you have to add the `DISCORD_TOKEN` and the `DISCORD_CLIENT_ID`.

## Run the Bot

There is nothing else you have to do. Just run `npm run dev` in the console to run the bot locally.

## Create commands

To create a command you have to create a file either direct in the commands directory or in a subdirectory. 
There you can export a name and a execute function. 

Use the `SlashCommandBuilder` of Discord.js to create the name, description and other params of the Command.

After implementing the command logic into the execute function you have to add it into the commands.ts file.
Import everything from the command and add it into the commands object.

## Create Events

Discord.js emits a lot of events than need handling.
For that you just create a new File in a subdirectory of the events directory.

In an event file you have to add a name and execute param.
The name is, of course, the name of the event.
The execute function will be the logic. 

After implementing everything you don't have to do anything else.
The index.ts file has an event handler that does everything for you. 

## Building the bot

After implementing everything you can build and run the bot.
Just run `npm run build` to create the build and then `npm run start` to run the finished bot.