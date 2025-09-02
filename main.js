const Discord = require("discord.js");
const bot = new Discord.Client({ intents: 53608447 });
const loadCommands = require("./Loaders/loadCommands");
const loadEvents = require("./Loaders/loadEvents");
require('dotenv').config();
bot.commands = new Discord.Collection();

console.log("Bot is starting...");

bot.login(process.env.DISCORD_TOKEN);
loadCommands(bot);
loadEvents(bot);
