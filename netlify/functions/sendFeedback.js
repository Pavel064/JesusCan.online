import axios from "axios";

exports.handler = async function (event) {
  let sendInfo;
  try {
    sendInfo = JSON.parse(event.body);
    if (!sendInfo) {
      throw "error";
    }
  } catch {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "error" }),
    };
  }

  if (Object.values(sendInfo).length < 3) {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "error" }),
    };
  }
  const { name, country, message, email } = sendInfo;

  const {
    VITE_API_TELEGRAM_TOKEN,
    VITE_GROUP_TELEGRAM,
    VITE_MESSAGE_THREAD_ID,
  } = process.env;

  const telegramURL = VITE_MESSAGE_THREAD_ID
    ? `https://api.telegram.org/bot${VITE_API_TELEGRAM_TOKEN}/sendMessage?text=${encodeURI(
        `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nText: ${message}`
      )}&chat_id=${VITE_GROUP_TELEGRAM}&message_thread_id=${VITE_MESSAGE_THREAD_ID}`
    : `https://api.telegram.org/bot${VITE_API_TELEGRAM_TOKEN}/sendMessage?text=${encodeURI(
        `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nText: ${message}`
      )}&chat_id=${VITE_GROUP_TELEGRAM}`;

  await axios.get(telegramURL);
  console.log(telegramURL);

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "ok" }),
  };
};
