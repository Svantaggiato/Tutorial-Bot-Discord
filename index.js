const Discord = require("discord.js")
const client = new Discord.Client({
    intents: 32767,
});
client.login("Token")
client.on("ready", () => {
    console.log("Bot Online!")
})