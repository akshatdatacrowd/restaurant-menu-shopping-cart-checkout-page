const sendTextMessage = (recipientId, messageText) => {
  console.log("sendTextMessage");

  const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  client.messages
    .create({
      to: recipientId,
      body: messageText,
      from: process.env.TWILIO_PHONE_NUMBER,
    })
    .then((message) => console.log(message.sid))
    .done();
};

module.exports = sendTextMessage;
