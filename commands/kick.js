const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`Você não pode chutar membros`)
        }
        if (!args[0]) {
            return message.channel.send(`Mencione um usuário!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.kick();
            await message.channel.send(`${member} foi chutado!`)
        } catch (e) {
            return message.channel.send(`O usuário não está neste servidor!`)
        }

    }
}