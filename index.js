const APIWrapper = require('./api');

module.exports = function(url, username, password) {
    const api = new APIWrapper(url, username, password);
  
    const Leads         = require('./endpoints/Leads');
    const Properties    = require('./endpoints/Properties');
    const PropertyUnits = require('./endpoints/PropertyUnits');

    return {
        Leads         : new Leads(api),
        Properties    : new Properties(api),
        PropertyUnits : new PropertyUnits(api),
    };
  };