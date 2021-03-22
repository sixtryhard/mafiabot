const Discord = require("discord.js");
 
 
   exports.run = async (bot, message, args) => {
 
var list = [
'https://media.discordapp.net/attachments/821185996167184414/823061451610390548/tenor_2.gif',
'https://media.discordapp.net/attachments/821185996167184414/823061470849794048/mlaWAO.gif',
'https://media.discordapp.net/attachments/821185996167184414/823061479024623616/6jy0j2.gif',
'https://media.discordapp.net/attachments/821185996167184414/823061490462228480/tapa.gif',
];
 
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para socar!');
}
 
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Toma')
        .setColor('#98FB98')
        .setDescription(`${message.author} acaba de socar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Vem tranquilo(a)')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
 