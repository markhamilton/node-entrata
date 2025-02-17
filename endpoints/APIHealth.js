class APIHealth {

    constructor(api) {
        this.api = api;
    }

    getStatus() {
        
        const request ={
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getStatus",
                "version":"r1"
            }
        };

        return this.api.makeRequest('/status/', request);
    }
}

module.export = APIHealth; 