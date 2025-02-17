class Pricing {

    constructor(api) {
        this.api = api;
    }

    getPricingPicklists() {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getPricingPicklists",
                "version":"r1"
            }
        };

        return this.api.makeRequest('/pricing/', request);
    }

    getPropertyFees(propertyId = "") {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getPropertyFees",
                "version":"r1",
                "params": {
                    "propertyId" : property,
                }
            }
        };

        return this.api.makeRequest('/pricing/', request);
    }
}

module.export = Pricing;