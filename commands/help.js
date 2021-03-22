const Discord = require('discord.js');
 
exports.run = async (client, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('#ff00ff')
  .setThumbnail(icon)
  .setTitle('💻 - Meus Comandos:')
  .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções. \n\n ⚙️ • **Comandos Gerais.**\n\n  🛠 • **Comandos Staff.**\n\n  🎲  • **Comandos de Diversão**.`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))
 
  message.channel.send(comandos).then(msg => {
    msg.react('⚙️').then(r => {
      msg.react('🛠').then(r => {
        msg.react('🎲').then(r => {
 
        })
      })
    })
 
    const geralFilter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === '🛠' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === '🎲' && user.id === message.author.id;
 
    const geral = msg.createReactionCollector(geralFilter);
      const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);
 
 
    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('⚙️  COMANDOS GERAIS')
      .setThumbnail(icon)
       .addFields(
        {
          name: '• **Help**',
          value: 'm.help'
        },
        {
        name: '**• ping**',
        value: 'm.ping'
        },
        {
        name: '**• serverinfo**',
        value: 'm.serverinfo'
        },
        {
        name: '**• userinfo**',
        value: 'm.userinfo ou m.userinfo @membro[ID]'
        },
        {
        name: '**• botinfo**',
        value: 'm.botinfo'
        },
      )
      .setColor('#ffff00')
      msg.edit(embed);
      })
 
    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('🛠  COMANDOS STAFF')
      .setThumbnail(icon)
      .addFields(
        {
          name: '• **Clear**',
          value: 'm.clear <quantidade>'
        },
        {
        name: '• **Ban**',
        value: 'm.ban @membro[ID] <motivo>'
        },
        {
        name: '• **kick**',
        value: 'm.kick @membro[ID] <motivo>'
        },
        {
        name: '• **give-role**',
        value: 'm.give-role @membro[ID] @cargo[ID]'
        },
        {
        name: '• **Anunciar**',
        value: 'm.Anunciar '
        },
        {
        name: '• **Lock**',
        value: 'm.lock '
        },
        {
        name: '• **Unlock**',
        value: 'm.unlock @membro[ID] <motivo>'
        },
        {
        name: '• **Mute**',
        value: 'm.Mute @membro[ID] '
        },
        {
        name: '• **Unmute**',
        value: 'm.unmute @membro[ID] '
        },
        {
        name: '• **Tempmute**',
        value: 'm.Tempmute @membro[ID] <tempo:s,m,h> '
        },
        {
        name: '• **Slowmode**',
        value: 'm.slowmode <tempo:s,m,h>(obs: ou  m.slowmode off) '
        },
        {
        name: '• **Sorteio**',
        value: 'm.sorteio <premio> <tempo:s,m,h> '
        },

      )
      .setColor('#ff0000')
      msg.edit(embed);
    })
 
    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('🎲  COMANDOS DIVERSÃO')
      .setThumbnail(icon)
      .addFields(
        {
          name: '• **Avatar**',
          value: 'm.avatar @membro[ID].'
        },
        {
        name: '• **Say**',
        value: 'm.say [mensagem]'
        },
        {
        name: '• **Tapa**',
        value: 'm.tapa @membro[ID]'
        },
        {
        name: '• **Kiss**',
        value: 'm.kiss @membro[ID]'
        },
        
      )
      .setColor('#0000ff')
      msg.edit(embed);
    })
 
 
 
 
  })
 
 
 
 
 
 
 
 
}