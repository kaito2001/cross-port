require('dotenv').config();

const PORT = process.env.PORT || 9000;
const HOSTNAME = process.env.HOSTNAME;
const MONGO_URI = process.env.MONGO_URI;
const REDIS_URL = process.env.REDIS_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;
const KEY_SESSION = process.env.KEY_SESSION;

module.exports = {
  PORT,
  HOSTNAME,
  MONGO_URI,
  REDIS_URL,
  JWT_SECRET,
  FACEBOOK_SECRET,
  KEY_SESSION,
};
