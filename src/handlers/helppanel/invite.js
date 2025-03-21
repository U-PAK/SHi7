const Discord = require('discord.js');

module.exports = async (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "invite-Bothelp") {
                interaction.deferUpdate();

                const row2 = new Discord.MessageActionRow()
                    .addComponents( 
                        new Discord.MessageSelectMenu()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "💻",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Bot to your server`,
                                    emoji: "📨",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: "📃",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                let row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setLabel("Invite")
                            .setURL(client.config.discord.botInvite)
                            .setStyle("LINK"),

                        new Discord.MessageButton()
                            .setLabel("Support server")
                            .setURL("https://discord.gg/BrPWT8fHmy")
                            .setStyle("LINK"),
                    );

                client.embed({
                    title: `📨・Invite`,
                    desc: `Make your server even better with Bot!`,
                    url: "https://discord.gg/BrPWT8fHmy",
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 