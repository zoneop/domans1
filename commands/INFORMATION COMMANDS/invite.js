const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
    aliases: ["add"],
    category: "INFORMATION COMMANDS",
    description: "Invite the Bot to your Server",
    useage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle("Invite, Musicium")
            .setDescription("[INVITE ME NOW, thanks](https://dc.musicium.eu)\n\n[Invite 2021's Fastest Music Bot](https://lava.milrato.eu)")
            .setFooter("Musicium", client.user.displayAvatarURL())

        message.reply(inviteembed);
    }
}

/**
 * @INFO
 * Bot Coded by ΣПVヽ ♡ᴺᵉˣ 𝙋𝙄𝙆𝘼𝘾𝙃𝙐࿐#3378 |
