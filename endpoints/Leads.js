class Leads {

    constructor(api) {
        this.api = api;
    }

    getLeads(
        propertyId,
        leadId              = "",
        name                = "",
        telephone           = "",
        email               = "",
        leadStatusIds       = "",
        psProductIds        = "",
        includeDemographics = false,
        fromDate            = "",
        toDate              = "",
        createdOnDateFrom   = "",
        createdOnDateTo     = "",
        eventTypeIds        = "",
        eventDateFrom       = "",
        eventDateTo         = "" ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getLeads",
                "version" : "r1",
                "params" : {
                    "propertyId"         : propertyId,
                    "leadId"             : leadId,
                    "name"               : name,
                    "telephone"          : telephone,
                    "email"              : email,
                    "leadStatusIds"      : leadStatusIds,
                    "psProductIds"       : psProductIds,
                    "includeDemographics": includeDemographics,
                    "fromDate"           : fromDate,
                    "toDate"             : toDate,
                    "createdOnDateFrom"  : createdOnDateFrom,
                    "createdOnDateTo"    : createdOnDateTo,
                    "eventTypeIds"       : eventTypeIds,
                    "eventDateFrom"      : eventDateFrom,
                    "eventDateTo"        : eventDateTo,
                }
            }
        };

        return this.api.makeRequest('/leads/', request);
    }

    getLeadPickLists(propertyId = "") {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getLeadPickLists",
                "version" : "r1",
                "params" : {
                    "propertyId" : property,
                }
            }
        };

        return this.api.makeRequest('/leads/', request);
    }

    getMitsLeads(
        propertyId,
        leadId              = "",
        name                = "",
        telephone           = "",
        email               = "",
        leadStatusIds       = "",
        psProductIds        = "",
        eventTypeIds        = "",
        sendUnitSpaces      = "",
        fromDateTime        = "",
        toDateTime          = "",
        eventDateFrom       = "",
        eventDateTo         = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getMitsLeads",
                "version" : "r1",
                "params" : {
                    "propertyId"    : propertyId,
                    "leadId"        : leadId,
                    "name"          : name,
                    "telephone"     : telephone,
                    "email"         : email,
                    "leadStatusIds" : leadStatusIds,
                    "psProductIds"  : psProductIds,
                    "eventTypeIds"  : eventTypeIds,
                    "sendUnitSpaces": sendUnitSpaces,
                    "fromDateTime"  : fromDateTime,
                    "toDateTime"    : toDateTime,
                    "eventDateFrom" : eventDateFrom,
                    "eventDateTo"   : eventDateTo,
                }
            }
        }

        return this.api.makeRequest('/leads/', request);
    }
}

module.exports = Leads;
