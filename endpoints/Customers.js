class Customers {

    constructor(api) {
        this.api = api;
    }

    getCustomers(
        propertyId          = "",
        customerIds         = "",
        leaseStatusTypeIds  = "",
        isAgreedToTermsOnly = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getCustomers",
                "version" : "r1",
                "params" : {
                    "propertyId"          : propertyId,
                    "customerIds"         : customerIds,
                    "leaseStatusTypeIds"  : leaseStatusTypeIds,
                    "isAgreedToTermsOnly" : isAgreedToTermsOnly,
                }
            }
        };

        return this.api.makeRequest('/customers/', request);
    }

    getCustomerTestimonials(
        propertyId = "",
        isApproved = "",
        fromDate   = "",
        toDate     = "", ) {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getCustomerTestimonials",
                "version" : "r1",
                "params" : {
                    "propertyId" : property,
                    "isApproved" : isApproved,
                    "fromDate"   : fromDate,
                    "toDate"     : toDate,
                }
            }
        };
        return this.api.makeRequest('/customers/', request);
    }

    getTestimonialPickLists() {

        const request = {
            "auth": {
                "type" : "basic"
            },
            "requestId" : 15,
            "method": {
                "name" : "getTestimonialPickLists",
                "version" : "r1",
            }
        };

        return this.api.makeRequest('/customers/', request);
    }
}

module.exports = Customers;