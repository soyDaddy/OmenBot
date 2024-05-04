module.exports = async (client, interaction, args) => {

    const user = interaction.options.getUser('user');
    let response = await fetch(`https://api.waifu.pics/sfw/hug`);
    let data = await response.text();
    const img = JSON.parse(data);

    if (!user) return client.errUsage({ usage: "hug [mention user]", type: 'editreply' }, interaction);


    client.embed({
        title: `${interaction.user.tag} hugs ${user.tag}`,
        image: `${img.url}`,
        type: 'editreply'
    }, interaction);
}

     