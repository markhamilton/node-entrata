const APIWrapper = require('./api');

module.exports = function(url, username, password) {
    const api = new APIWrapper(url, username, password);
  
    const APIHealth     = require('./endpoints/APIHealth');
    const Applications  = require('./endpoints/Applications');
    const Customers     = require('./endpoints/Customers');
    const Leads         = require('./endpoints/Leads');
    const Leases        = require('./endpoints/Leases');
    const Maintenance   = require('./endpoints/Maintenance');
    const Pricing       = require('./endpoints/Pricing');
    const Properties    = require('./endpoints/Properties');
    const PropertyUnits = require('./endpoints/PropertyUnits');

    return {
        APIHealth     : new APIHealth(api),
        Applications  : new Applications(api),
        Customers     : new Customers(api),
        Leads         : new Leads(api),
        Leases        : new Leases(api),
        Maintenance   : new Maintenance(api),
        Pricing       : new Pricing(api),
        Properties    : new Properties(api),
        PropertyUnits : new PropertyUnits(api),
    };
  };