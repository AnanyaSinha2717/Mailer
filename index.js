const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "manantechnosurge@gmail.com",
    pass: "wvzh xlve fpjg tbro",
  },
});

const recipients = [
  { name: "Ananyacloud", email: "ananya.gcloud2717@gmail.com" },
  { name: "Archit", email: "goelarchit824@gmail.com" },
  { name: "Anmol", email: "anmolas999@gmail.com" },
  { name: "Anshika", email: "kumaranshika1910@gmail.com" },

];

const htmlFilePath = path.join(__dirname, "/", "template.html");
const htmlTemplate = fs.readFileSync(htmlFilePath, "utf8");

async function main() {
  for (const recipient of recipients) {
    const personName = htmlTemplate.replace("{{name}}", recipient.name);

    const info = await transporter.sendMail({
      from: '"Manan - A Technosurge" <manantechnosurge@gmail.com>',
      to: recipient.email,
      subject: "Invitation for Farewell 2k24 🔥",
      text: "",
      html: personName,
    });

    console.log("Message sent: %s", info.messageId);
  }
}

main().catch(console.error);
