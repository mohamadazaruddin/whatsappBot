const qrcode = require('qrcode-terminal');
const express = require("express");
const { Client } = require("whatsapp-web.js");
const client = new Client();
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App is now working on port no : ${port}`);
});
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on("message", (message) => {
  console.log(message.body);
});
 client.on("message", (message) => {
   if (message.body === "hii") {
     message.reply("Hi I am Azhar's bot what can I do for you ");
   }
 });
  client.on("message", (message) => {
    if (message.body === "Hii") {
      message.reply("Hi I am Azhar's bot what can I do for you ");
    }
  });
   client.on("message", (message) => {
     if (message.body === "hi") {
       message.reply("Hi I am Azhar's bot what can I do for you ");
     }
   });
      client.on("message", (message) => {
        if (message.body === "Hi") {
          message.reply("Hi I am Azhar's bot what can I do for you ");
        }
      });
      client.on("message", (message) => {
        if (message.body === "azhar") {
          message.reply("Azhar is busy now I am his bot");
        }
      });
    client.on("message", (message) => {
            if (message.body === "Azhar") {
              message.reply("Azhar is busy now I am his bot");
            }
          });
 
client.on("message", async (msg) => {
    if (message.body === "Hello") {
        const chat = await msg.getChat();
        const contact = await msg.getContact();

        await chat.sendMessage(`Hello @${contact.id.user}`, {
            mentions: [contact],
        });
    }
          });
 
client.initialize();
 
    
