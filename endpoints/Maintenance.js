class Maintenance {

    constructor(api) {
        this.api = api;
    }

    getInspections(
        propertyId         = "",
        leaseId            = "",
        unitSpaceId        = "",
        fromDate           = "",
        toDate             = "",
        statusTypeIds      = "",
        inspectionFormId   = "",
        inspectionTypeId   = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getInspections",
                "version" : "r1",
                "params" : {
                    "propertyId"       : propertyId,
                    "leaseId"          : leaseId,
                    "unitSpaceId"      : unitSpaceId,
                    "fromDate"         : fromDate,
                    "toDate"           : toDate,
                    "statusTypeIds"    : statusTypeIds,
                    "inspectionFormId" : inspectionFormId,
                    "inspectionTypeId" : inspectionTypeId,
                }
            }
        };

        return this.api.makeRequest('/maintenance/', request);
    }

    getInspectionTemplates(
        propertyIds  = "",
        showDisabled = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getInspectionTemplates",
                "version" : "r1",
                "params" : {
                    "propertyIds"  : propertyIds,
                    "showDisabled" : showDisabled,
                }
            }
        };

        return this.api.makeRequest('/maintenance/', request);
    }

    getWorkOrderPickList(propertyId = "") {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getWorkOrderPickList",
                "version" : "r1",
                "params" : {
                    "propertyId" : property,
                }
            }
        };

        return this.api.makeRequest('/maintenance/', request);
    }

    getWorkOrders(
        propertyId               = "",
        workOrderId              = "",
        propertyUnitId           = "",
        vendorId                 = "",
        leaseStatusTypeIds       = "",
        workOrderTypeIds         = "",
        buildingName             = "",
        unitNumber               = "",
        maintenanceCategoryId    = "",
        maintenanceProblemId     = "",
        includeChildWorkOrders   = "",
        includeDeletedWorkOrders = "",
        createOnFromDate         = "",
        createdOnToDate          = "",
        lastUpdatedOnFromDate    = "",
        lastUpdatedOnToDate      = "",
        completedOnFromDate      = "",
        completedOnToDate        = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getWorkOrders",
                "version" : "r1",
                "params" : {
                    "propertyId"               : propertyId,
                    "workOrderId"              : workOrderId,
                    "propertyUnitId"           : propertyUnitId,
                    "vendorId"                 : vendorId,
                    "leaseStatusTypeIds"       : leaseStatusTypeIds,
                    "workOrderTypeIds"         : workOrderTypeIds,
                    "buildingName"             : buildingName,
                    "unitNumber"               : unitNumber,
                    "maintenanceCategoryId"    : maintenanceCategoryId,
                    "maintenanceProblemId"     : maintenanceProblemId,
                    "includeChildWorkOrders"   : includeChildWorkOrders,
                    "includeDeletedWorkOrders" : includeDeletedWorkOrders,
                    "createOnFromDate"         : createOnFromDate,
                    "createdOnToDate"          : createdOnToDate,
                    "lastUpdatedOnFromDate"    : lastUpdatedOnFromDate,
                    "lastUpdatedOnToDate"      : lastUpdatedOnToDate,
                    "completedOnFromDate"      : completedOnFromDate,
                    "completedOnToDate"        : completedOnToDate,
                }
            }
        };

        return this.api.makeRequest('/maintenance/', request);
    }
}

module.export = Maintenance;