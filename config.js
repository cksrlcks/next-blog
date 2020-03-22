// import dotenv from 'dotenv';
// dotenv.config();
const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
});

export default client;
