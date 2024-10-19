const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ananyasinha2717@gmail.com",
    pass: "whwc vkiy krzx esvn",
  },
});

const recipients = [
  { name: "Ananyacloud", email: "ananya.gcloud2717@gmail.com" },
  { name: "Bob", email: "musicmuses17@gmail.com" },
  { name: "Archit", email: "goelarchit824@gmail.com" },
  { name: "Anmol", email: "anmolas999@gmail.com" },
];

const htmlFilePath = path.join(__dirname, "/", "template.html");
const htmlTemplate = fs.readFileSync(htmlFilePath, "utf8");

async function main() {
  for (const recipient of recipients) {
    const personName = htmlTemplate.replace("{{name}}", recipient.name);

    const info = await transporter.sendMail({
      from: '"Ananya" <ananyasinha2717@gmail.com>',
      to: recipient.email,
      subject: "Farewell invitation",
      text: "",
      html: personName,
    });

    console.log("Message sent: %s", info.messageId);
  }
}

main().catch(console.error);
