const axios = require("axios");
const https = require("https");

const WAZUH_API_URL = process.env.WAZUH_API_URL;
const WAZUH_USER = process.env.WAZUH_USER;
const WAZUH_PASS = process.env.WAZUH_PASS;

// Ignore SSL warning for now
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

async function fetchAgents() {
  try {
    const response = await axios.get(`${WAZUH_API_URL}/agents`, {
      auth: {
        username: WAZUH_USER,
        password: WAZUH_PASS,
      },
      httpsAgent,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching Wazuh agents:", error.message);
    return null;
  }
}

module.exports = { fetchAgents };

