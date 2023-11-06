const Canvas = require('canvas');
const Discord = require('discord.js')
const Schema = require('../../database/models/profile');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('canvas')
        .setDescription('Canvas Test'),
    run: async (client, interaction) => {
        const data = await Schema.findOne({ User: interaction.user.id })
        const background = await Canvas.loadImage(data.Background);
        const canvas = Canvas.createCanvas(930, 280);
        const ctx = canvas.getContext("2d");

        // Stretch background to the size of the canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Draw an opaque rectangle ontop of image
        const cornerRadius = 10;
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.beginPath();
        ctx.moveTo(20 + cornerRadius, 30);
        ctx.lineTo(canvas.width - 20 - cornerRadius, 30);
        ctx.arcTo(canvas.width - 20, 30, canvas.width - 20, 30 + cornerRadius, cornerRadius);
        ctx.lineTo(canvas.width - 20, canvas.height - 30 - cornerRadius);
        ctx.arcTo(canvas.width - 20, canvas.height - 30, canvas.width - 20 - cornerRadius, canvas.height - 30, cornerRadius);
        ctx.lineTo(20 + cornerRadius, canvas.height - 30);
        ctx.arcTo(20, canvas.height - 30, 20, canvas.height - 30 - cornerRadius, cornerRadius);
        ctx.lineTo(20, 30 + cornerRadius);
        ctx.arcTo(20, 30, 20 + cornerRadius, 30, cornerRadius);
        ctx.closePath();
        ctx.fill();

        // Not the same as rankPos, this is technically 'level' but we call it 'rank' as it coincides with our rank roles
        ctx.font = "36px grotesk";
        ctx.fillStyle = "#44eaff";
        ctx.fillText(`Rank 69`, 243, 90);

        // Trim long usernames
        ctx.font = "36px grotesk";
        ctx.fillStyle = "#ffffff";
        ctx.fillText('soyDaddy', 243, 140);

        // Message count
        ctx.font = "22px grotesk";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`Message Count: 69`, 243, 220);

        // Current xp and xp needed
        ctx.font = "16px grotesk";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = 'center';
        ctx.fillText(`69 / 69696969`, 798, 149);

        // Position in the leaderboard
        ctx.font = "45px grotesk";

        // Flip the canvas so the XP bar fills counter-clockwise
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        const percentage = Math.floor((69 / 15000) * 100);
        // Outter XP bar
        ctx.beginPath();
        ctx.lineWidth = 30;
        ctx.strokeStyle = "#484B4E";
        ctx.arc(130, 142, 75, 0, 2 * Math.PI, true);
        ctx.stroke();
        // Inner XP bar
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#44eaff";
        ctx.arc(130, 142, 75, 1.5 * Math.PI, (Math.PI * 2) / (100 / percentage) - (Math.PI / 2), false);
        ctx.stroke();

        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);

        // Draw a rounded rectangle to crop our avatar into
        function roundedImage(x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }
        roundedImage(55, 55, 170, 170, 50);
        ctx.clip();
        // Get a small res version of the user's avatar and draw it onto the canvas
        const avatarURL = interaction.user.displayAvatarURL() + "?size=128";
        const avatar = await Canvas.loadImage(avatarURL.replace('webp', 'png'));
        ctx.drawImage(avatar, 55, 55, 170, 170);

    
    const image = new Discord.AttachmentBuilder(canvas.toBuffer(), 'rank.jpg')
        interaction.reply({ files: [image] });
    }
}