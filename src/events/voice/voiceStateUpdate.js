const Discord = require('discord.js');
const voiceSchema = require("../../database/models/voice");
const channelSchema = require("../../database/models/voiceChannels");
//const voiceRank = require('../../database/models/levels')

module.exports = (client, oldState, newState) => {
    if (oldState.channelId == newState.channelId) {
        if (oldState.serverDeaf == false && newState.selfDeaf == true) return;
        if (oldState.serverDeaf == true && newState.selfDeaf == false) return;
        if (oldState.serverMute == false && newState.serverMute == true) return;
        if (oldState.serverMute == true && newState.serverMute == false) return;
        if (oldState.selfDeaf == false && newState.selfDeaf == true) return;
        if (oldState.selfDeaf == true && newState.selfDeaf == false) return;
        if (oldState.selfMute == false && newState.selfMute == true) return;
        if (oldState.selfMute == true && newState.selfMute == false) return;
        if (oldState.selfVideo == false && newState.selfVideo == true) return;
        if (oldState.selfVideo == true && newState.selfVideo == false) return;
        if (oldState.streaming == false && newState.streaming == true) return;
        if (oldState.streaming == true && newState.streaming == false) return;
    }

    var guildID = newState.guild.id || oldState.guild.id;

    //VoiceRank
   /* if(!newState.guild || !newState.member.user || newState.member.user.bot) return;
    voiceRank.findOne({ Guild: guildID }, async (err, data) => {
      const data = voiceRank.findOne({ User: newStats.member.id })
      if (!oldState.channel) {
        // The user has joined a voice channel
        data.VJoin = new Date()
        data.save();
      } 
      // The User has left a voice Channel
      else if (!newState.channel) {
        var now = new Date();
        var joined = data.VJoin || new Date();
        var connectedTime = now.getTime() - joined.getTime();
        //Grant Coints!
        if(connectedTime > 60000){
            const data = voiceRank.findOne({ User: oldStats.member.id })
            if (newState.member.user.bot || !newState.guild) return;
            if (!data.Levels == true) return;
            let VoicePoints = Math.floor(connectedTime / 60000)
            let curPoints = data.voicexp;
            let neededPoints = data.voicexpleft;
            while(curPoints > neededPoints) {
                data.voicelevel + 1
                data.voicexp = 0
                data.save()
                //HARDING UP!
                const newLevel = client.points.get(key, `voicelevel`); //get current NEW level
                if (newLevel % 4 === 0) client.points.math(key, `+`, 100, `neededvoicepoints`)
                curPoints = client.points.get(key, `voicepoints`);
                neededPoints = client.points.get(key, `neededvoicepoints`);
            }
            let leftpoints = neededPoints - curPoints;
            let toaddpoints = VoicePoints;
            addingpoints(toaddpoints, leftpoints);
            function addingpoints(toaddpoints, leftpoints) {
                if (toaddpoints >= leftpoints) {
                    client.points.set(key, 0, `voicepoints`); //set points to 0
                    client.points.inc(key, `voicelevel`); //add 1 to level
                    //HARDING UP!
                    const newLevel = client.points.get(key, `voicelevel`); //get current NEW level
                    if (newLevel % 4 === 0) client.points.math(key, `+`, 100, `neededvoicepoints`)
                    const newneededPoints = client.points.get(key, `neededvoicepoints`); //get NEW needed Points
                    addingpoints(toaddpoints - leftpoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                } else {
                    client.points.math(key, `+`, Number(toaddpoints), `voicepoints`)
                }
            }
        } else {
            return;
            //console.log(`Not enough connected time: ${connectedTime}`)
        }
      }
    })*/

    //Join to Create
    voiceSchema.findOne({ Guild: guildID }, async (err, data) => {
        if (data) {
            channelSchema.findOne({ Guild: guildID, Channel: oldState.channelId }, async (err, data2) => {
                if (data2) {
                    let channel = client.channels.cache.get(data2.Channel);
                    let memberCount = channel.members.size;

                    if (memberCount < 1 || memberCount == 0) {
                        if (data.ChannelCount) {
                            try {
                                try {
                                    data.ChannelCount -= 1;
                                    data.save().catch(e => { });
                                }
                                catch { }
                            }
                            catch { }
                        }

                        try {
                            var remove = await channelSchema.deleteOne({ Channel: oldState.channelID });
                            return oldState.channel.delete().catch(e => { });
                        }
                        catch { }
                    }
                }
            })

            const user = await client.users.fetch(newState.id);
            const member = newState.guild.members.cache.get(user.id);

            try {
                if (newState.channel.id === data.Channel) {
                    channelSchema.findOne({ Guild: guildID, Channel: oldState.channelId }, async (err, data2) => {
                        if (data2) {
                            let channel = client.channels.cache.get(data2.Channel);
                            let memberCount = channel.members.size;

                            if (memberCount < 1 || memberCount == 0) {
                                if (data.ChannelCount) {
                                    try {
                                        data.ChannelCount -= 1;
                                        data.save().catch(e => { });
                                    }
                                    catch { }
                                }

                                try {
                                    var remove = await channelSchema.deleteOne({ Channel: oldState.channelId });
                                    return oldState.channel.delete().catch(e => { });
                                }
                                catch { }
                            }
                        }
                    })

                    if (data.ChannelCount) {
                        data.ChannelCount += 1;
                        data.save();
                    }
                    else {
                        data.ChannelCount = 1;
                        data.save();
                    }

                    let channelName = data.ChannelName;
                    channelName = channelName.replace(`{emoji}`, "🔊")
                    channelName = channelName.replace(`{channel name}`, `Voice ${data.ChannelCount}`)
                    channelName = channelName.replace(`{channel count}`, `${data.ChannelCount}`)
                    channelName = channelName.replace(`{member}`, `${user.username}`)
                    channelName = channelName.replace(`{member tag}`, `${user.tag}`)

                    const channel = await newState.guild.channels.create({
                        name: "⌛",
                        type:  Discord.ChannelType.GuildVoice,
                        parent: data.Category,
                    });

                    if (member.voice.setChannel(channel)) {
                        channel.edit({ name: channelName })
                    }

                    new channelSchema({
                        Guild: guildID,
                        Channel: channel.id,
                    }).save();
                }
                else {
                    channelSchema.findOne({ Guild: guildID, Channel: oldState.channelID }, async (err, data2) => {
                        if (data2) {
                            let channel = client.channels.cache.get(data2.Channel);
                            let memberCount = channel.members.size;

                            if (memberCount < 1 || memberCount == 0) {
                                if (data.ChannelCount) {
                                    try {
                                        data.ChannelCount -= 1;
                                        data.save().catch(e => { });
                                    }
                                    catch { }
                                }

                                try {
                                    var remove = await channelSchema.deleteOne({ Channel: oldState.channelID });
                                    return oldState.channel.delete().catch(e => { });
                                }
                                catch { }
                            }
                        }
                    })
                }
            }
            catch { }
        }
    })
}