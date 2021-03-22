const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setDescription(`**Olá ${message.author}, Abaixo está uma listinha sobre mim:**`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: ' 📌 • Meu nome e minha #',
            value: `${client.user.tag}`,
        },
        {
            name: ' 📖 • Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
        },
        {
            name: ' 🔊 • Canais:',
            value: `Tenho **${client.channels.cache.size}** canais de texto.`,
        },
        {
            name: '👽 • Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
        },
        {
            name: '🚀 • Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
        },
        {
            name: '🔥 • Meu criador:',
            value: '! 𝙎𝙞𝙭 ᵃᵏᵗʳᵒᵛᵃᵒ#6883',
        },
        {
            name: '🍺 • Meu servidor:',
            value: 'https://discord.gg/jG9NQeveWE',
        },
    )
    message.channel.send(embed);
}