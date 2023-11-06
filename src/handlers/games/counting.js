const Discord = require("discord.js");
const countSchema = require("../../database/models/countChannel");
const count = require("../../database/models/count");

module.exports = async (client) => {
  client.on("messageCreate", async (message) => {
    if (message.author.bot || message.channel.type === Discord.ChannelType.DM) return;
    if ( isNaN(message.content) || message.attachments.size > 0 || message.type == Discord.MessageType.ChannelPinnedMessage ) return;
    const data = await countSchema.findOne({
      Guild: message.guild.id,
      Channel: message.channel.id,
    });
    const countData = await count.findOne({ Guild: message.guild.id });
    if (data && countData) {
      if (message.author.id == countData.User) {
        message.delete().catch(() => {})
        const embed = new Discord.EmbedBuilder()
          .setTitle(`· Error`)
          .setDescription(`No puedes contar 2 veces seguidas.`)
          .setFooter({text: `OmenBot || Counting`})
          .setColor('#ff0000')
        message.reply({ embeds: [embed] }).then(m =>  setTimeout(()=>{m.delete()},5000));
      } else if (message.content == countData.Count) {
        message.react(client.emotes.normal.check);
        countData.User = message.author.id;
        countData.Count += 1;
        countData.save();
      } else {
        message.delete().catch(() => {})
        const embed = new Discord.EmbedBuilder()
          .setTitle(`· Error`)
          .setDescription(`El número que va ahora es ${countData.Count}.`)
          .setFooter({text: `OmenBot || Counting`})
          .setColor('#ff0000')
        message.reply({ embeds: [embed] }).then(m =>  setTimeout(()=>{m.delete()},5000));
      }
    } else if (data) {
      if (message.content == 1) {
        message.react(client.emotes.normal.check);
        new count({
          Guild: message.guild.id,
          User: message.author.id,
          Count: 2,
        }).save();
      } else {
        return message.react(client.emotes.normal.error);
      }
    }
  }).setMaxListeners(0);
};