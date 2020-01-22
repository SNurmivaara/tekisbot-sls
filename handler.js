"use strict";

const axios = require("axios");

module.exports.hello = async event => {
  const token = process.env.TELEGRAM_TOKEN;
  const base_url = process.env.BASE_URL;

  try {
    data = event.body;
    message = JSON.stringify(data.message.text);
    chat_id = data.message.chat.id;
    first_name = data.message.chat.first_name;

    response = `TKO-äly bot at your service, type in /start`;

    if (message.contains(start)) response = `Hello ${first_name}`;

    data = {
      text: response,
      chat_id: chat_id
    };
    url = base_url + `/sendMessage`;

    axios.post(url, data);
  } catch {
    console.log("error!");
  }
  return { statusCode: 200 };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
