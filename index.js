const {Client} = require('discord.js');
const { play, stop } = require('./command.js');
const bot = new Client();


bot.on('ready', () => console.log("On!"));

bot.on('message', (msg)=>{
      if(msg.author.bot) return;

    const prefix = '?';
    if (!msg.content.startsWith(prefix)) return;

    const commandName = getCommandName(prefix, msg.content);
    const args = getCommandArgs(prefix, msg.content);

    if (commandName === 'play')
    return play(msg, args);
    else if (commandName ==='stop')
    return stop(msg, args);


});

bot.on("message", function(message) {
    if(message.content === "?help"){
        let embed = new Discord.MessageEmbed()
        .setTitle("**Die Hilfe**")
        .addField("?play")
        .setColor("RANDOM")
        .setFooter("Ist halt play, nur wen Lied zu ende ist,sonst Skip.")

        message.channel.send(embed);
    }
})

function getCommandName(prefix, content) {
    return content
    .slice(prefix.length)
    .split(' ')[0];
}

function getCommandArgs(prefix, content) {
    return content
    .slice(prefix.length)
    .split(' ')
    .slice(1);
}

