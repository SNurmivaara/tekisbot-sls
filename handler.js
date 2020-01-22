"use strict";

const axios = require("axios");

module.exports.hello = async event => {
  const token = process.env.TELEGRAM_TOKEN;
  const base_url = `https://api.telegram.org/bot${token}`;

  try {
    let data = event.body;
    let message = data.message.text;
    let chat_id = data.message.chat.id;
    let first_name = data.message.chat.first_name;

    let response = `TKO-äly bot at your service, type in /start`;

    if (message.contains(start)) response = `Hello ${first_name}`;

    let answer = {
      text: response,
      chat_id: chat_id
    };
    let url = base_url + `/hello`;

    axios.post(url, answer);
    return { statusCode: 200 };
  } catch (e) {
    console.log(e, event);
  }
  return { statusCode: 500 };
};
