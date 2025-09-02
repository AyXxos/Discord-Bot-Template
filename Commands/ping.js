const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "Pong !",
    permission: "Aucune",
    dm: false,
    category: "Info | bot",

    async run(bot, message) {

        await message.reply(`I have ${bot.ws.ping} ms, impressive right?`);
    }
}