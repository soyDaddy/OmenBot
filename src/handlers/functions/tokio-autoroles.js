const Discord = require('discord.js');

module.exports = async (client) => {
client.on(Discord.Events.InteractionCreate, async (interaction) => {

    if (!interaction.isStringSelectMenu()) return;

        if (interaction.values == 'tokio_roles_13') {

            if (interaction.member.roles.cache.has('1153182221541314600')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153182221541314600').catch((error) => { });
                    interaction.reply({ content: `<@&1153182221541314600> was removed!`, ephemeral: true });
            } else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153182221541314600').catch((error) => { });
                    interaction.reply({ content: `<@&1153182221541314600> was added!`, ephemeral: true });
            }
        } 
        
        if (interaction.values == 'tokio_roles_14') {
            if (interaction.member.roles.cache.has('1153182483811143711')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153182483811143711').catch(error => { });
                    interaction.reply({ content: `<@&1153182483811143711> was removed!`, ephemeral: true });
            } else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153182483811143711').catch(error => { });
                    interaction.reply({ content: `<@&1153182483811143711> was added!`, ephemeral: true });
            }
        } 
        
        if (interaction.values == 'tokio_rolex_18') {
            if (interaction.member.roles.cache.has('1153182628913107034')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153182628913107034').catch(error => { })
                    interaction.reply({ content: `<@&1153182628913107034> was removed!`, ephemeral: true });
            } else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153182628913107034').catch(error => { })
                    interaction.reply({ content: `<@&1153182628913107034> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_roles_he') {
            if (interaction.member.roles.cache.get('1153182846337433650')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153182846337433650').catch(error => { })
                    interaction.reply({ content: `<@&1153182846337433650> was removed!`, ephemeral: true });
            } else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153182846337433650').catch(error => { })
                    interaction.reply({ content: `<@&1153182846337433650> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_roles_she') {
            if (interaction.member.roles.cache.get('1153182876628697150')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153182876628697150').catch(error => { })
                    interaction.reply({ content: `<@&1153182876628697150> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153182876628697150').catch(error => { })
                    interaction.reply({ content: `<@&1153182876628697150> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_roles_it') {
            if (interaction.member.roles.cache.get('1153182897117855806')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153182897117855806').catch(error => { })
                    interaction.reply({ content: `<@&1153182897117855806> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153182897117855806').catch(error => { })
                    interaction.reply({ content: `<@&1153182897117855806> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_roles_abierto') {
            if (interaction.member.roles.cache.get('1153183321027792958')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153183321027792958').catch(error => { })
                    interaction.reply({ content: `<@&1153183321027792958> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153183321027792958').catch(error => { })
                    interaction.reply({ content: `<@&1153183321027792958> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_roles_cerrado') {
            if (interaction.member.roles.cache.get('1153183338421567518')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153183338421567518').catch(error => { })
                    interaction.reply({ content: `<@&1153183338421567518> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153183338421567518').catch(error => { })
                    interaction.reply({ content: `<@&1153183338421567518> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_roles_preguntar') {
            if (interaction.member.roles.cache.get('1153183360714289202')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('1153183360714289202').catch(error => { })
                    interaction.reply({ content: `<@&1153183360714289202> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('1153183360714289202').catch(error => { })
                    interaction.reply({ content: `<@&1153183360714289202> was added!`, ephemeral: true });
            }
        }

        /*
        if (interaction.values == 'tokio_roles_rojo') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_rolex_naranja') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_rolex_amarillo') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_roles_verde') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_rolex_azul') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_rolex_morado') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_rolex_marron') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_rolex_negro') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }

        if (interaction.values == 'tokio_rolex_blanco') {
            if (interaction.member.roles.cache.get('')) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove('').catch(error => { })
                    interaction.reply({ content: `<@&> was removed!`, ephemeral: true });
            }
            else {
                interaction.guild.members.cache.get(interaction.user.id).roles.add('').catch(error => { })
                    interaction.reply({ content: `<@&> was added!`, ephemeral: true });
            }
        }
        */
})
}