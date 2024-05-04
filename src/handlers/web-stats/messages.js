const ServerStats = require('../../database/models/web-stats/serverstats')

module.exports = (client) => {
	client.on('messageCreate', async (message) => {
  		if (!message.author.bot) {
    		await ServerStats.findOneAndUpdate(
	      		{ Guild: message.guild.id },
    	  		{ $inc: { totalMessages: 1 } },
      			{ upsert: true, new: true }
    		);
  		}
	});
}