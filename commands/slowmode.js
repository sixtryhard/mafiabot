const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'slowmode',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Você não tem **MANAGE_CHANNELS** permissão!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Você não especificou um horário!').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'sem razão';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('O resfriamento do canal já está desligado').then(m => m.delete({ timeout: 5000 }));

            embed.setTitle('Slowmode Desabilitado')
                .setColor('#00ff00')
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('não é um horário válido, por favor tente novamente!').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('Esse limite de modo lento é muito alto, digite qualquer coisa menor que 6 horas.').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`Slowmode já está definido para ${args[0]}`);

        embed.setTitle('Slowmode Habilitado')
            .addField('Slowmode: ', args[0])
            .addField('Razão: ', reason)
            .setColor('#ff0000');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}