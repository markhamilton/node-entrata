class Properties {

    constructor(api) {
        this.api = api;
    }

    getProperties(
        propertyIds        = "", 
        propertyLookupCode = "",
        showAllStatus      = "0", ) {
        
        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getProperties",
                "version":"r1",
                "params": {
                    "propertyIds"        : propertyIds,
                    "propertyLookupCode" : propertyLookupCode,
                    "showAllStatus"      : showAllStatus,
                }
            }
        };

        return this.api.makeRequest('/properties/', request);
    }

    getFloorPlans(
        propertyId, 
        propertyFloorPlanIds      = "", 
        usePropertyPreferences    = false, 
        includeDisabledFloorplans = false,) {
    
        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getProperties",
                "version":"r1",
                "params": {
                    "propertyId"                  : propertyId,
                    "propertyFloorPlanIds"        : propertyFloorPlanIds,
                    "usePropertyPreferences"      : usePropertyPreferences,
                    "includeDisabledFloorplans"   : includeDisabledFloorplans,
                }
            }
        };

        return this.api.makeRequest('/properties/', request);
    }

    getPetTypes(propertyIds = "") {
    
        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getProperties",
                "version":"r1",
                "params": {
                    "propertyIds" : propertyIds,
                }
            }
        };
    
        return this.api.makeRequest('/properties/', request);
    }
    
    getPhoneNumber(
        switchCode = "",
        ref        = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getPhoneNumber",
                "version":"r1",
                "params": {
                    "switchCode" : switchCode,
                    "ref"        : ref,
                }
            }
        };

        return this.api.makeRequest('/properties/', request);
    }

    getPropertyAnnouncements(propertyID = "" ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getPropertyAnnouncements",
                "version":"r1",
                "params": {
                    "propertyID" : property,
                }
            }
        };
        
        return this.api.makeRequest('/properties/', request);
    }

    getPropertyPickLists(propertyIds = "") {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getProperties",
                "version":"r1",
                "params": {
                    "propertyIds" : propertyIds,
                }
            }
        };

        return this.api.makeRequest('/properties/', request);
    }

    getRentableItems(propertyId = "") {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getRentableItems",
                "version":"r1",
                "params": {
                    "propertyId" : property,
                }
            }
        };

        return this.api.makeRequest('/properties/', request);
    }
}

module.exports = Properties;