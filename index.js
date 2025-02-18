const APIWrapper = require('./api');

module.exports = function(url, username, password) {
    const api = new APIWrapper(url, username, password);
    const endpoints = [
        'APIHealth',
        'Applications',
        'Customers',
        'Leads',
        'Leases',
        'Maintenance',
        'Pricing',
        'Properties',
        'PropertyUnits'
    ];

    const result = {};
    endpoints.forEach(endpoint => {
        const EndpointClass = require(`./endpoints/${endpoint}`);
        result[endpoint] = new EndpointClass(api);
    });

    return result;
};
