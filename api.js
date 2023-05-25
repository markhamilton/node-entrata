const axios = require('axios');

class APICore {
    constructor(url, username, password) {
        this.httpClient = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
            },
        });
    }

    async makeRequest(url, data) {
        try {
            const response = await this.httpClient.post(url, data);
            if (response.status !== 200) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = APICore;
