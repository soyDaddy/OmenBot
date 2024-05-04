const MemberStats = require('../../database/models/web-stats/members')
const ServerStats = require('../../database/models/web-stats/serverstats')

module.exports = (client) => {
	client.on('guildMemberAdd', async (member) => {
  		const date = new Date();
  		const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  		await MemberStats.findOneAndUpdate(
    		{ Guild: member.guild.id, month: firstDayOfMonth },
    		{ $inc: { joins: 1 } },
		    { upsert: true }
	  	);
        await ServerStats.findOneAndUpdate(
    		{ Guild: member.guild.id },
    		{ $inc: { totalMembers: 1 } },
    		{ upsert: true, new: true }
  		);
	});
}