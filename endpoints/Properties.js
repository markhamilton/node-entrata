class Properties {

    constructor(api) {
        this.api = api;
    }

    getProperties(propertyIds = "", propertyLookupCode = "", showAllStatus = "0") {
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

    getFloorPlans(propertyId, propertyFloorPlanIds = "", usePropertyPreferences = false, includeDisabledFloorplans = false) {
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
}

module.exports = Properties;