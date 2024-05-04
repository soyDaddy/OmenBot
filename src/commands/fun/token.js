const voucher_codes = require("voucher-code-generator");

module.exports = async (client, interaction, args) => {

    const fakeToken = voucher_codes.generate({ pattern: "####################.###########_####################" });
            client.embed({
                title: `🤖・Bot token`,
                desc: `${fakeToken}`,
                type: 'editreply',
            }, interaction);
}

 