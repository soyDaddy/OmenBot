const voucher_codes = require("voucher-code-generator");
const CodeSchema = require("../../database/models/premiumcode");

module.exports = async (client, interaction, args) => {
    const planType = interaction.options.getString('plan');
    const cantidad = interaction.options.getNumber('amount') || 1;
    let amount = cantidad;
    let codes = [];

    for (var i = 0; i < amount; i++) {
        const codePremium = voucher_codes.generate({ pattern: "####-####-####" });
        const code = codePremium.toString().toUpperCase();
        const findCode = await CodeSchema.findOne({ code: code });

        if (!findCode) {
            CodeSchema.create({ code: code, plan: planType });
            codes.push(`${i + 1} - ${code}`);
        }
    };

    let plan = 'Not set';

    let planDuration = 'Not Set';

    if (planType === 'minutely') {plan = 'Minutely'; planDuration = '5 Minutes'}

    if (planType === 'daily') {plan = 'Daily'; planDuration = '1 Day'}

    if (planType === 'weekly') {plan = 'Weekly'; planDuration = '7 Days'}

    if (planType === 'monthly') {plan = 'Monthly'; planDuration = '30 Days'}

    if (planType === 'yearly') {plan = 'Yearly'; planDuration = '365 Days'}

    if (planType === 'lifetime') {plan = 'Life Time'; planDuration = 'Never Expire'}

    return client.embed({
        title: `・PREMIUM CODES`,
        desc: `\`\`\`Generated Premium User Code:\n\n--------\n${codes.join("\n")}\n--------\`\`\``,
        fields: [
            { name: `\`💠\` • Plan Type:`, value: `\`\`\`${plan}\`\`\``, inline: true },
            { name: `\`💠\` • Plan Duration:`, value: `\`\`\`${planDuration}\`\`\``, inline: true },
        ],
        color: "#FFD700",
        image: 'https://www.brandingfacts.com/wp-content/uploads/2018/05/Marca-Premium.jpg',
        type: `editreply`
    }, interaction);
}