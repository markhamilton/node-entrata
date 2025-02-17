class Applications {

    constructor(api) {
        this.api = api;
    }

    getCompanyApplications(propertyId = "") {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getCompanyApplications",
                "version" : "r1",
                "params" : {
                    "propertyId" : property,
                }
            }
        };

        return this.api.makeRequest('/applications/', request);
    }
}

module.export = Applications;