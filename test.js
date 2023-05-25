require('dotenv').config();
const api = require('./index')(process.env.ENTRATA_URL, process.env.ENTRATA_USERNAME, process.env.ENTRATA_PASSWORD);

api.Properties.getProperties().then((response) => {
    console.dir(response, {depth: null, colors: true});
}).catch((error) => {
    console.error(error);
});

