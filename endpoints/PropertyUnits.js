class PropertyUnits {

    constructor(api) {
        this.api = api;
    }

    getMitsPropertyUnits(
        propertyIds, 
        availableUnitsOnly        = "",
        usePropertyPreferences    = "",  
        includeDisabledFloorplans = "", 
        includeDisabledUnits      = "", 
        showUnitSpaces            = "" ) {
        
        const getFloorPlansRequest = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getProperties",
                "version":"r1",
                "params": {
                    "propertyIds" : propertyIds,
                    "availableUnitsOnly" : availableUnitsOnly,
                    "usePropertyPreferences" : usePropertyPreferences,
                    "includeDisabledFloorplans" : includeDisabledFloorplans,
                    "includeDisabledUnits" : includeDisabledUnits,
                    "showUnitSpaces" : showUnitSpaces,
                }
            }
        };

        return this.api.makeRequest('/properties/' + propertyId + '/floorplans', getFloorPlansRequest);
    }

    getPropertyUnits(
        propertyIds,
        availableUnitsOnly        = "",
        usePropertyPreferences    = "",
        includeDisabledFloorplans = "",
        includeDisabledUnits      = "" ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getPropertyUnits",
                "version":"r1",
                "params": {
                    "propertyIds"              : propertyIds,
                    "availableUnitsOnly"       : availableUnitsOnly,
                    "usePropertyPreferences"   : usePropertyPreferences,
                    "includeDisabledFloorplans": includeDisabledFloorplans,
                    "includeDisabledUnits"     : includeDisabledUnits,
                }
            }
        };

        return this.api.makeRequest('/properties/' + propertyId + '/units', request);
    }

    getUnitTypes(propertyID) {
    
        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name": "getUnitTypes",
                "version":"r1",
                "params": {
                    "propertyID" : property,
                }
            }
        };

        return this.api.makeRequest('/properties/' + propertyID + '/unitTypes', request);
    }
}

module.exports = PropertyUnits;