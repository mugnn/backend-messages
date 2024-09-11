import Pusher from "pusher";
require("dotenv").config();

const pusher = new Pusher({
  appId: "1858236",
  key: process.env.PUSHER_KEY || "",
  secret: process.env.PUSHER_SECRET || "",
  cluster: "sa1",
  useTLS: true
});

export default pusher;