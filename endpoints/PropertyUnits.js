class PropertyUnits {

    constructor(api) {
        this.api = api;
    }

    getMitsPropertyUnits(propertyIds, availableUnitsOnly, usePropertyPreferences, includeDisabledFloorplans, includeDisabledUnits, showUnitSpaces) {
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

}


module.exports = PropertyUnits;