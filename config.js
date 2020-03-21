// import dotenv from 'dotenv';
// dotenv.config();
const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.accessToken,
});

export default client;
