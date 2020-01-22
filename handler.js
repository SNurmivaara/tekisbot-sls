"use strict";

const axios = require("axios");

module.exports.hello = async event => {
  const token = process.env.TELEGRAM_TOKEN;
  const base_url = `https://api.telegram.org/bot${token}`;

  try {
    data = event.body;
    message = data.message.text;
    chat_id = data.message.chat.id;
    first_name = data.message.chat.first_name;

    response = `TKO-äly bot at your service, type in /start`;

    if (message.contains(start)) response = `Hello ${first_name}`;

    answer = {
      text: response,
      chat_id: chat_id
    };
    url = base_url + `/hello`;

    axios.post(url, answer);
    return { statusCode: 200 };
  } catch (e) {
    console.log(e, event.body, message);
  }
  return { statusCode: 500 };
};
