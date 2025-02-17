class Leases {

    constructor(api) {
        this.api = api;
    }

    getEvictedLeases(
        propertyID            = "",
        evictionStartDateFrom = "",
        evictionStartDateTo   = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getEvictedLeases",
                "version" : "r1",
                "params" : {
                    "propertyID"          : propertyID,
                    "evictionStartDateFrom": evictionStartDateFrom,
                    "evictionStartDateTo"  : evictionStartDateTo,
                }
            }
        };

        return this.api.makeRequest('/leases/', request);
    }

    getExpiringLeases(
        propertyID           = "",
        fromDate             = "",
        toDate               = "",
        isMonthToMonth       = "",
        showNoticeLeasesOnly = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getExpiringLeases",
                "version" : "r1",
                "params" : {
                    "propertyID"           : propertyID,
                    "fromDate"             : fromDate,
                    "toDate"               : toDate,
                    "isMonthToMonth"       : isMonthToMonth,
                    "showNoticeLeasesOnly" : showNoticeLeasesOnly,
                }
            }
        };

        return this.api.makeRequest('/leases/', request);
    }

    getLeaseDetails(
        propertyId         = "",
        leaseId            = "",
        leaseStatusTypeIds = "",
        includeAddOns      = "",
        includeCharge      = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getLeaseDetails",
                "version" : "r1",
                "params" : {
                    "propertyId"         : propertyId,
                    "leaseId"            : leaseId,
                    "leaseStatusTypeIds" : leaseStatusTypeIds,
                    "includeAddOns"      : includeAddOns,
                    "includeCharge"      : includeCharge,
                }
            }
        };

        return this.api.makeRequest('/leases/', request);
    }

    getLeases(
        propertyID,      
        applicationID            = "",
        customerID               = "",
        leaseStatusTypeIds       = "",
        leaseIds                 = "",
        scheduledArCodeIds       = "",
        unitNumber               = "",
        buildingName             = "",
        moveInDateFrom           = "",
        moveInDateTo             = "",
        leaseExpiringDateFrom    = "",
        leaseExpiringDateTo      = "",
        moveOutDateFrom          = "",
        moveOutDateTo            = "",
        includeOtherIncomeLeases = "",
        residentFriendlyMode     = "",
        includeLeaseHistory      = "",
        includeArTransactions    = "",
        includeDemographics      = "",) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getLeases",
                "version" : "r1",
                "params" : {
                    "propertyID"              : propertyID,
                    "applicationID"           : applicationID,
                    "customerID"              : customerID,
                    "leaseStatusTypeIds"      : leaseStatusTypeIds,
                    "leaseIds"                : leaseIds,
                    "scheduledArCodeIds"      : scheduledArCodeIds,
                    "unitNumber"              : unitNumber,
                    "buildingName"            : buildingName,
                    "moveInDateFrom"          : moveInDateFrom,
                    "moveInDateTo"            : moveInDateTo,
                    "leaseExpiringDateFrom"   : leaseExpiringDateFrom,
                    "leaseExpiringDateTo"     : leaseExpiringDateTo,
                    "moveOutDateFrom"         : moveOutDateFrom,
                    "moveOutDateTo"           : moveOutDateTo,
                    "includeOtherIncomeLeases": includeOtherIncomeLeases,
                    "residentFriendlyMode"    : residentFriendlyMode,
                    "includeLeaseHistory"     : includeLeaseHistory,
                    "includeArTransactions"   : includeArTransactions,
                    "includeDemographics"     : includeDemographics,
        
                }
            }
        }

        return this.api.makeRequest('/leases/', request);
    }

    getLeasePickList() {
    
        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getLeasePickList",
                "version" : "r1"
            }
        }

        return this.api.makeRequest('/leases/', request);
    }

    getLeaseDocuments(
        propertyID       = "",
        leaseID          = "",
        externalLeaseID  = "",
        documentID       = "",
        fileTypesCode    = "",
        showDeletedFile  = "",
        addedOnFromDate  = "", ){

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getLeaseDocuments",
                "version" : "r1",
                "params" : {
                    "propertyID"      : propertyID,
                    "leaseID"         : leaseID,
                    "externalLeaseID" : externalLeaseID,
                    "documentID"      : documentID,
                    "fileTypesCode"   : fileTypesCode,
                    "showDeletedFile" : showDeletedFile,
                    "addedOnFromDate" : addedOnFromDate,
                }
            }
        }

        return this.api.makeRequest('/leases/', request);
    }

    getLeaseDocumentsList(
        propertyID         = "",
        leaseID            = "",
        externalLeaseID    = "",
        fileTypesCode      = "",
        showDeletedFile    = "",
        leaseStatusTypeIds = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getLeaseDocumentsList",
                "version" : "r1",
                "params" : {
                    "propertyID"      : propertyID,
                    "leaseID"         : leaseID,
                    "externalLeaseID" : externalLeaseID,
                    "fileTypesCode"   : fileTypesCode,
                    "showDeletedFile" : showDeletedFile,
                    "leaseStatusTypeIds" : leaseStatusTypeIds,
                }
            }
        };

        return this.api.makeRequest('/leases/', request);
    }
}

module.exports = Leases;