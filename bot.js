const readline = require('readline');
const Discord = require('discord.js');
const { Client, Intents } = require("discord.js");
const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });
const config = require("./config.json");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    rl.question('請輸入頻道ID\n', (channel) => {
        var input = function () {
            rl.question('', (msg) => {
                if (msg == '-l') { return rl.close(); }
                else {
                    client.channels.fetch(channel)
                        .then(cnl => cnl.send(msg))
                        .catch(console.error);
                    input();
                }
            })
        }
        input();
    });
});
client.login(config.key);