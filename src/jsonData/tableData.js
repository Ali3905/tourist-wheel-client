
export const columnsForTable = [
    { id: 'id', label: 'ID' },
    { id: 'customername', label: 'Customer Name' },
    { id: 'customerNumber', label: 'Customer Mobile' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'AdminName', label: 'Admin Name' },
    { id: 'CustomerOrderCount', label: "Order Count" },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Accept/Reject" },
];


export const columnsForSheduledTable = [
    { id: 'id', label: 'ID' },
    { id: 'customername', label: 'Customer Name' },
    { id: 'customerNumber', label: 'Customer Mobile' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'AdminName', label: 'Admin Name' },
    { id: 'CustomerOrderCount', label: "Order Count" },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Acceptance" },
];

export const dummyData = [
    { id: 1, customername: 'Hane Doe', customerNumber: '8775787855', Pincode: "629179", AdminName: 'Jay', CustomerOrderCount: '500', status: 'pending' },
    { id: 2, customername: 'Ebi Ra', customerNumber: '8775787855', Pincode: "629173", AdminName: 'Vijay', CustomerOrderCount: '500', status: 'pending' },
    { id: 3, customername: 'Jane Doe', customerNumber: '8775787855', Pincode: "629173", AdminName: 'Ajay', CustomerOrderCount: '700', status: 'pending' },
    { id: 4, customername: 'John Smith', customerNumber: '8775787855', Pincode: "629175", AdminName: 'Raju', CustomerOrderCount: '800', status: 'pending' },
    { id: 5, customername: 'Alice Johnson', customerNumber: '8775787855', Pincode: "629170", AdminName: 'Moses', CustomerOrderCount: '900', status: 'pending' },
    { id: 6, customername: 'Jane Doe', customerNumber: '8775787855', Pincode: "629176", AdminName: 'Tomy', CustomerOrderCount: '700', status: 'pending' },
    { id: 7, customername: 'John Smith', customerNumber: '8775787855', Pincode: "629178", AdminName: 'Riju', CustomerOrderCount: '800', status: 'pending' },
];

export const columnsForOrders = [
    { id: 'id', label: 'No' },
    { id: 'customerName', label: 'Employee Name' },
    { id: 'email', label: 'Email' },
    { id: 'orderType', label: 'Employee Position' },
    { id: 'customerPin', label: 'Mobile No' },
    { id: 'Pincode', label: 'PinCode' },

    // { id: 'assigneeDetails', label: "Assignee" },
    // { id: 'orderTimings', label: 'Progress' },
    // { id: 'products', label: 'Products' },
    // { id: 'orderValue', label: 'Value' },
    // { id: 'ratings', label: 'Ratings' },
];

export const dataForOrders = [
    {
        id: 1,
        customerName: 'Hane Doe',
        count: 'handoe@gmail.com',
        orderType: "Driver",
        customerPin: '7249005806',
        assigneeDetails: {
            name: 'admin',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Jijo',
                    failedToDeliverCount: 5,
                    activeStatus: true,
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Abison',
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Shilash', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Kisolin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707711302',
                }
            }
        },
        orderTimings: {
            progress: 'Not Started',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: null,
                OrderDispatchedTime: null,
                OrderTansferedTime: null,
                DeliveredTime: null
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '4'
    },
    {
        id: 2,
        customerName: 'Ebi Ra',
        count: '10',
        orderType: "COD",
        customerPin: '629173',
        assigneeDetails: {
            name: 'vendor',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Raju',
                    failedToDeliverCount: 5,
                    activeStatus: true,
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Sudhan',
                    vendorType: 'Premium',
                    activeStatus: true,
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Misben', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Aswin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707532682',
                }
            }
        },
        orderTimings: {
            progress: 'Accepted',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: null,
                OrderTansferedTime: '1707552568',
                DeliveredTime: null,
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '5'
    },
    {
        id: 3,
        customerName: 'Jane Doe',
        count: '14',
        orderType: "COD",
        customerPin: '629173',
        assigneeDetails: {
            name: 'partner',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'somu',
                    failedToDeliverCount: 5,
                    activeStatus: true
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Kisore',
                    vendorType: 'Premium',
                    activeStatus: false,
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Gibin', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', Name: 'Vendor three', activeStatus: true, VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Vijin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Dispatched',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                OrderDispatchedTime: null,
                DeliveredTime: null,
            }
        },
        products: 'EmpAccepted',
        orderValue: '500',
        ratings: '4'
    },
    {
        id: 4,
        customerName: 'John Smith',
        count: '5',
        orderType: "COD",
        customerPin: '629175',
        assigneeDetails: {
            name: 'admin',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Shiju',
                    failedToDeliverCount: 5,
                    activeStatus: true
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Mani',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vijay', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', Name: 'Vendor three', activeStatus: true, VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Ebin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'transfered',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                DeliveredTime: null,
            }
        },
        products: 'EmpRejected',
        orderValue: '500',
        ratings: '5'
    },
    {
        id: 5,
        customerName: 'Alice Johnson',
        count: '6',
        orderType: "COD",
        customerPin: '629170',
        assigneeDetails: {
            name: 'vendor',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Praveen',
                    failedToDeliverCount: 5,
                    activeStatus: true,
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Surya',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Ramesh', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Vishnu',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Delivered',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: null,
                DeliveredTime: null,
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '4'
    },
    {
        id: 6,
        customerName: 'Jane Doe',
        count: '7',
        orderType: "online",
        customerPin: '629176',
        assigneeDetails: {
            name: 'partner',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    activeStatus: true,
                    contactDetails: '9123456780',
                    Name: 'Jackson',
                    failedToDeliverCount: 5,

                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Vivek',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', contactDetails: '9123456780', Name: 'Heman', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'senthil',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Not Started',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                DeliveredTime: '1707552568'
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '3'
    },
    {
        id: 7,
        customerName: 'John Smith',
        count: '8',
        orderType: "online",
        customerPin: '629178',
        assigneeDetails: {
            name: 'admin',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Hari',
                    failedToDeliverCount: 5,

                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Sarav',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Vignesh', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Gopal',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Not Started',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                DeliveredTime: '1707552568'
            }
        },
        products: 'EmpRejected',
        orderValue: '500',
        ratings: '5'
    }
];


export const columnsForTransferOrder = [
    { id: 'id', label: 'ID' },
    { id: 'AdminName', label: 'Admin Name' },
    { id: 'AdminContact', label: 'Admin Number' },
    { id: 'AdminStatus', label: 'Active Status' },
    { id: 'VendorName', label: 'Vendor Name' },
    { id: 'VendorContact', label: 'Vendor Contact' },
    { id: 'VendorSatus', label: 'Vendor Status' },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Transfter" },
];

export const dummyDataForTransferOrder = [
    { id: 1, AdminName: 'Hane Doe', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Jay', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 2, AdminName: 'Ebi Ra', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Vijay', VendorContact: '82768796987', VendorSatus: "false", status: 'pending' },
    { id: 3, AdminName: 'Jane Doe', AdminContact: '8775787855', AdminStatus: "false", VendorName: 'Ajay', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 4, AdminName: 'John Smith', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Raju', VendorContact: '82768796987', VendorSatus: "false", status: 'pending' },
    { id: 5, AdminName: 'Alice Johnson', AdminContact: '8775787855', AdminStatus: "false", VendorName: 'Moses', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 6, AdminName: 'Jane Doe', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Tomy', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 7, AdminName: 'John Smith', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Riju', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
];


export const columnsForAdminTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'AdminEmail', label: 'Email' },
    { id: 'control', label: 'Control' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'PartnerCount', label: 'Partner' },
    { id: 'SuccessCount', label: 'Success' },
    { id: 'FailureCount', label: 'Failure' },
    { id: 'Rating', label: 'Rating' },
    { id: 'Action', label: 'Action' },
];

export const adminDummyData = [
    { id: 1, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 2, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 3, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 4, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 5, name: 'Mani', AdminEmail: 'dummy@gmail.com', Location: 600, Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 6, name: 'Hlloe one', AdminEmail: 'dummy@gmail.com', Location: 700, Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 7, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 8, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Pincode: '300', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 9, name: 'owfuhhwo', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 10, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 11, name: 'ewfewf', AdminEmail: 'dummy@gmail.com', Location: 600, Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 12, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Pincode: '700', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 13, name: 'efwefwef', AdminEmail: 'dummy@gmail.com', Location: 200, Pincode: '200', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 14, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 15, name: 'ewfwfw', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 16, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 17, name: 'ewfwef', AdminEmail: 'dummy@gmail.com', Location: 600, Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 18, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 19, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 20, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' }
];

export const columnsForVendorTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'AdminEmail', label: 'Email' },
    { id: 'control', label: 'Control' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'Type', label: 'Type' },
    { id: 'PartnerCount', label: 'Partner' },
    { id: 'SuccessCount', label: 'Success' },
    { id: 'FailureCount', label: 'Failure' },
    { id: 'Rating', label: 'Rating' },
    { id: 'Action', label: 'Action' },
    // profit // turnover
];

export const VendorDummyData = [
    { id: 1, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 2, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Type: 'Bulk', Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 3, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Dark', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 4, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Cloud', Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 5, name: 'Mani', AdminEmail: 'dummy@gmail.com', Location: 600, Type: 'Byzo', Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 6, name: 'Hlloe one', AdminEmail: 'dummy@gmail.com', Location: 700, Type: 'Bulk', Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 7, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Type: 'Dark', Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 8, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '300', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 9, name: 'owfuhhwo', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Cloud', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 10, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 11, name: 'ewfewf', AdminEmail: 'dummy@gmail.com', Location: 600, Type: 'Dark', Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 12, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Type: 'Cloud', Pincode: '700', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 13, name: 'efwefwef', AdminEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 14, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 15, name: 'ewfwfw', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Byzo', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 16, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 17, name: 'ewfwef', AdminEmail: 'dummy@gmail.com', Location: 600, Type: 'Byzo', Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 18, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Type: 'Byzo', Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 19, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Byzo', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 20, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' }
];

export const columnsForSellerTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'SellerEmail', label: 'Email' },
    { id: 'Count', label: 'Count' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'products', label: 'Products' },
    { id: 'Action', label: 'Action' },
    // profit // turnover
];


export const SellerDummyData = [
    { id: 1, name: 'John Doe', SellerEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', Count: '80', },
    { id: 2, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 300, Type: 'Bulk', Pincode: '0', Count: '80', },
    { id: 3, name: 'Raju', SellerEmail: 'dummy@gmail.com', Location: 400, Type: 'Dark', Pincode: '400', Count: '80', },
    { id: 4, name: 'Shiju', SellerEmail: 'dummy@gmail.com', Location: 500, Type: 'Cloud', Pincode: '500', Count: '80', },
    { id: 5, name: 'Mani', SellerEmail: 'dummy@gmail.com', Location: 600, Type: 'Byzo', Pincode: '600', Count: '80', },
    { id: 6, name: 'Hlloe one', SellerEmail: 'dummy@gmail.com', Location: 700, Type: 'Bulk', Pincode: '0', Count: '80', },
    { id: 7, name: 'John Doe', SellerEmail: 'dummy@gmail.com', Location: 200, Type: 'Dark', Pincode: '200', Count: '80', },
    { id: 8, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '300', Count: '80', },
    { id: 9, name: 'owfuhhwo', SellerEmail: 'dummy@gmail.com', Location: 400, Type: 'Cloud', Pincode: '400', Count: '80', },
    { id: 10, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '0', Count: '80', },
    { id: 11, name: 'ewfewf', SellerEmail: 'dummy@gmail.com', Location: 600, Type: 'Dark', Pincode: '600', Count: '80', },
    { id: 12, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 700, Type: 'Cloud', Pincode: '700', Count: '80', },
    { id: 13, name: 'efwefwef', SellerEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', Count: '80', },
    { id: 14, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '0', Count: '80', }
];


export const columnsForEmployeeTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'PartnerEmail', label: 'Email' },
    { id: 'Count', label: 'Order Count' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'Rating', label: 'Rating' },
    { id: 'Action', label: 'Action' },
    // profit // turnover
];


export const EmployeeDummyData = [
    { id: 1, name: 'John Doe', PartnerEmail: 'dummy@gmail.com', Location: 200, Type: 'Admin', Pincode: '200', Count: '80', Rating: '5' },
    { id: 2, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 300, Type: 'Vendor', Pincode: '0', Count: '80', Rating: '5' },
    { id: 3, name: 'Raju', PartnerEmail: 'dummy@gmail.com', Location: 400, Type: 'Global', Pincode: '400', Count: '80', Rating: '5' },
    { id: 4, name: 'Shiju', PartnerEmail: 'dummy@gmail.com', Location: 500, Type: 'Admin', Pincode: '500', Count: '80', Rating: '5' },
    { id: 5, name: 'Mani', PartnerEmail: 'dummy@gmail.com', Location: 600, Type: 'Vendor', Pincode: '600', Count: '80', Rating: '5' },
    { id: 6, name: 'Hlloe one', PartnerEmail: 'dummy@gmail.com', Location: 700, Type: 'Global', Pincode: '0', Count: '80', Rating: '5' },
    { id: 7, name: 'John Doe', PartnerEmail: 'dummy@gmail.com', Location: 200, Type: 'Admin', Pincode: '200', Count: '80', Rating: '5' },
    { id: 8, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 300, Type: 'Vendor', Pincode: '300', Count: '80', Rating: '5' },
    { id: 9, name: 'owfuhhwo', PartnerEmail: 'dummy@gmail.com', Location: 400, Type: 'Global', Pincode: '400', Count: '80', Rating: '5' },
    { id: 10, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 500, Type: 'Vendor', Pincode: '0', Count: '80', Rating: '5' },
    { id: 11, name: 'ewfewf', PartnerEmail: 'dummy@gmail.com', Location: 600, Type: 'Admin', Pincode: '600', Count: '80', Rating: '5' },
    { id: 12, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 700, Type: 'Global', Pincode: '700', Count: '80', Rating: '5' },
    { id: 13, name: 'efwefwef', PartnerEmail: 'dummy@gmail.com', Location: 200, Type: 'Vendor', Pincode: '200', Count: '80', Rating: '5' },
    { id: 14, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 300, Type: 'Admin', Pincode: '0', Count: '80', Rating: '5' }
];

export const columnsForCustomerTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'Count', label: 'Order Count' },
    { id: 'BulkCount', label: 'Bulk Count' },
    { id: 'Wallet', label: 'Wallet Worth' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'RefundCount', label: 'Refund count' },
    { id: 'Action', label: 'Action' },
];


export const CustomerDummyData = [
    { id: 1, name: 'John Doe', Phone: '8878578464', Count: 200, Wallet: '50', Pincode: '200', BulkCount: '80', RefundCount: '5' },
    { id: 2, name: 'Ebi Ra', Phone: '8878578464', Count: 300, Wallet: '100', Pincode: '0', BulkCount: '80', RefundCount: '5' },
    { id: 3, name: 'Raju', Phone: '8878578464', Count: 400, Wallet: '500', Pincode: '400', BulkCount: '80', RefundCount: '5' },
    { id: 4, name: 'Shiju', Phone: '8878578464', Count: 500, Wallet: '50', Pincode: '500', BulkCount: '80', RefundCount: '5' },
    { id: 5, name: 'Mani', Phone: '8878578464', Count: 600, Wallet: '100', Pincode: '600', BulkCount: '80', RefundCount: '5' },
    { id: 6, name: 'Hlloe one', Phone: '8878578464', Count: 700, Wallet: '500', Pincode: '0', BulkCount: '80', RefundCount: '5' },
    { id: 7, name: 'John Doe', Phone: '8878578464', Count: 200, Wallet: '50', Pincode: '200', BulkCount: '80', RefundCount: '5' },
    { id: 8, name: 'Ebi Ra', Phone: '8878578464', Count: 300, Wallet: '100', Pincode: '300', BulkCount: '80', RefundCount: '5' },
    { id: 9, name: 'owfuhhwo', Phone: '8878578464', Count: 400, Wallet: '500', Pincode: '400', BulkCount: '80', RefundCount: '5' },
    { id: 10, name: 'Ebi Ra', Phone: '8878578464', Count: 500, Wallet: '100', Pincode: '0', BulkCount: '80', RefundCount: '5' },
    { id: 11, name: 'ewfewf', Phone: '8878578464', Count: 600, Wallet: '50', Pincode: '600', BulkCount: '80', RefundCount: '5' },
    { id: 12, name: 'Ebi Ra', Phone: '8878578464', Count: 700, Wallet: '500', Pincode: '700', BulkCount: '80', RefundCount: '5' },
    { id: 13, name: 'efwefwef', Phone: '8878578464', Count: 200, Wallet: '100', Pincode: '200', BulkCount: '80', RefundCount: '5' },
    { id: 14, name: 'Ebi Ra', Phone: '8878578464', Count: 300, Wallet: '50', Pincode: '0', BulkCount: '80', RefundCount: '5' }
];


export const columnsForCouponTable = [
    { id: 'id', label: 'ID' },
    { id: 'Customername', label: 'Customer Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'CouponType', label: 'Coupon Type' },
    { id: 'CouponValue', label: 'Coupon Value' },
    { id: 'OrderValue', label: 'Order Value' },
    { id: 'PaymentMode', label: 'Payment Mode' },
    { id: 'Review', label: 'Review' },
];


export const CouponDummyData = [
    { id: 1, Customername: 'John Doe', Phone: '8878578464', CouponValue: 200, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'COD', Review: '4' },
    { id: 2, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 300, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'online', Review: '4' },
    { id: 3, Customername: 'Raju', Phone: '8878578464', CouponValue: 400, OrderValue: '500', CouponType: 'reached OL', PaymentMode: 'COD', Review: '4' },
    { id: 4, Customername: 'Shiju', Phone: '8878578464', CouponValue: 500, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'online', Review: '4' },
    { id: 5, Customername: 'Mani', Phone: '8878578464', CouponValue: 600, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'COD', Review: '4' },
    { id: 6, Customername: 'Hlloe one', Phone: '8878578464', CouponValue: 700, OrderValue: '500', CouponType: 'reached OL', PaymentMode: 'online', Review: '4' },
    { id: 7, Customername: 'John Doe', Phone: '8878578464', CouponValue: 200, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'COD', Review: '4' },
    { id: 8, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 300, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'online', Review: '4' },
    { id: 9, Customername: 'owfuhhwo', Phone: '8878578464', CouponValue: 400, OrderValue: '500', CouponType: 'monthly pack', PaymentMode: 'COD', Review: '4' },
    { id: 10, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 500, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'online', Review: '4' },
    { id: 11, Customername: 'ewfewf', Phone: '8878578464', CouponValue: 600, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'COD', Review: '4' },
    { id: 12, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 700, OrderValue: '500', CouponType: 'monthly pack', PaymentMode: 'online', Review: '4' },
    { id: 13, Customername: 'efwefwef', Phone: '8878578464', CouponValue: 200, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'COD', Review: '4' },
    { id: 14, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 300, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'online', Review: '4' }
];

export const columnsForWalletsTable = [
    { id: 'id', label: 'ID' },
    { id: 'Customername', label: 'Customername Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'OrderCount', label: 'Order Count' },
    { id: 'OrderValue', label: 'Order Value' },
    { id: 'CashBackType', label: 'CashBack Type' },
    { id: 'Status', label: 'Status' }, // used not used

];


export const WalletDummyData = [
    { id: 1, Customername: 'John Doe', Phone: '8878578464', OrderCount: '89', OrderValue: 200, CashBackType: 'above 2500', Status: 'Used' },
    { id: 2, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '60', OrderValue: 300, CashBackType: 'First Buy', Status: 'not used' },
    { id: 3, Customername: 'Raju', Phone: '8878578464', OrderCount: '28', OrderValue: 400, CashBackType: 'reached OL', Status: 'Used' },
    { id: 4, Customername: 'Shiju', Phone: '8878578464', OrderCount: '11', OrderValue: 500, CashBackType: 'above 2500', Status: 'not used' },
    { id: 5, Customername: 'Mani', Phone: '8878578464', OrderCount: '22', OrderValue: 600, CashBackType: 'First Buy', Status: 'Used' },
    { id: 6, Customername: 'Hlloe one', Phone: '8878578464', OrderCount: '43', OrderValue: 700, CashBackType: 'reached OL', Status: 'not used' },
    { id: 7, Customername: 'John Doe', Phone: '8878578464', OrderCount: '62', OrderValue: 200, CashBackType: 'above 2500', Status: 'Used' },
    { id: 8, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '17', OrderValue: 300, CashBackType: 'First Buy', Status: 'not used' },
    { id: 9, Customername: 'owfuhhwo', Phone: '8878578464', OrderCount: '10', OrderValue: 400, CashBackType: 'monthly pack', Status: 'Used' },
    { id: 10, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '15', OrderValue: 500, CashBackType: 'First Buy', Status: 'not used' },
    { id: 11, Customername: 'ewfewf', Phone: '8878578464', OrderCount: '30', OrderValue: 600, CashBackType: 'above 2500', Status: 'Used' },
    { id: 12, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '20', OrderValue: 700, CashBackType: 'monthly pack', Status: 'not used' },
    { id: 13, Customername: 'efwefwef', Phone: '8878578464', OrderCount: '15', OrderValue: 200, CashBackType: 'First Buy', Status: 'Used' },
    { id: 14, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '10', OrderValue: 300, CashBackType: 'above 2500', Status: 'not used' }
];

export const columnsForRefundTable = [
    { id: 'id', label: 'ID' },
    { id: 'Customername', label: 'Customer Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'OrderCount', label: 'Order Count' },
    { id: 'OrderValue', label: 'Order Value' },
    { id: 'RefundAmount', label: 'Refund Amount' },
    { id: 'RefundProduct', label: 'Refund Product' },
    { id: 'WalletAmount', label: 'wallet Amount' },

];

export const RefundDummyData = [
    { id: 1, Customername: 'John Doe', Phone: '8878578464', OrderCount: '89', OrderValue: 200, RefundAmount: '100', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 2, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '60', OrderValue: 300, RefundAmount: '200', RefundProduct: 'Product 2', WalletAmount: '200' },
    { id: 3, Customername: 'Raju', Phone: '8878578464', OrderCount: '28', OrderValue: 400, RefundAmount: '80', RefundProduct: 'Product 3', WalletAmount: '120' },
    { id: 4, Customername: 'Shiju', Phone: '8878578464', OrderCount: '11', OrderValue: 500, RefundAmount: '100', RefundProduct: 'Product 4', WalletAmount: '200' },
    { id: 5, Customername: 'Mani', Phone: '8878578464', OrderCount: '22', OrderValue: 600, RefundAmount: '200', RefundProduct: 'Product 5', WalletAmount: '120' },
    { id: 6, Customername: 'Hlloe one', Phone: '8878578464', OrderCount: '43', OrderValue: 700, RefundAmount: '80', RefundProduct: 'Product 6', WalletAmount: '200' },
    { id: 7, Customername: 'John Doe', Phone: '8878578464', OrderCount: '62', OrderValue: 200, RefundAmount: '100', RefundProduct: 'All', WalletAmount: '120' },
    { id: 8, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '17', OrderValue: 300, RefundAmount: '200', RefundProduct: 'Product 2', WalletAmount: '200' },
    { id: 9, Customername: 'owfuhhwo', Phone: '8878578464', OrderCount: '10', OrderValue: 400, RefundAmount: '120', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 10, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '15', OrderValue: 500, RefundAmount: '200', RefundProduct: 'Product 1', WalletAmount: '200' },
    { id: 11, Customername: 'ewfewf', Phone: '8878578464', OrderCount: '30', OrderValue: 600, RefundAmount: '100', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 12, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '20', OrderValue: 700, RefundAmount: '120', RefundProduct: 'Product 1', WalletAmount: '200' },
    { id: 13, Customername: 'efwefwef', Phone: '8878578464', OrderCount: '15', OrderValue: 200, RefundAmount: '200', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 14, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '10', OrderValue: 300, RefundAmount: '100', RefundProduct: 'Product 1', WalletAmount: '200' }
];

export const columnsForRevertRefundTable = [
    { id: 'id', label: 'ID' },
    { id: 'id', label: 'Order ID' },
    { id: 'customername', label: 'Customer N' },
    { id: 'customerNumber', label: 'Customer M' },
    { id: 'AdminName', label: 'Admin N' },
    { id: 'VendorName', label: 'Vendor N' },
    { id: 'CustomerOrderCount', label: "Order C" },
    { id: 'RefundCount', label: "Refund C" },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Accept/Reject" },
];



export const dummyDataForRevertRefund = [
    { id: 1, OrderID: '10', customername: 'Hane Doe', customerNumber: '8775787855', VendorName: "Vijay", AdminName: 'Jay', CustomerOrderCount: '500', RefundCount: '10', status: 'pending' },
    { id: 2, OrderID: '10', customername: 'Ebi Ra', customerNumber: '8775787855', VendorName: "Heman", AdminName: 'Vijay', CustomerOrderCount: '500', RefundCount: '10', status: 'pending' },
    { id: 3, OrderID: '10', customername: 'Jane Doe', customerNumber: '8775787855', VendorName: "Ramesh", AdminName: 'Ajay', CustomerOrderCount: '700', RefundCount: '10', status: 'pending' },
    { id: 4, OrderID: '10', customername: 'John Smith', customerNumber: '8775787855', VendorName: "Srinithi", AdminName: 'Raju', CustomerOrderCount: '800', RefundCount: '10', status: 'pending' },
    { id: 5, OrderID: '10', customername: 'Alice Johnson', customerNumber: '8775787855', VendorName: "Samuthuya", AdminName: 'Moses', CustomerOrderCount: '900', RefundCount: '10', status: 'pending' },
    { id: 6, OrderID: '10', customername: 'Jane Doe', customerNumber: '8775787855', VendorName: "Naveen", AdminName: 'Tomy', CustomerOrderCount: '700', RefundCount: '10', status: 'pending' },
    { id: 7, OrderID: '10', customername: 'John Smith', customerNumber: '8775787855', VendorName: "Dinesh", AdminName: 'Riju', CustomerOrderCount: '800', RefundCount: '10', status: 'pending' },
];


export const columnsForPayoutTable = [
    { id: 'id', label: 'ID' },
    { id: 'Requester', label: 'Requested By' },
    { id: 'RequesterName', label: 'Requested Name' },
    { id: 'Upi', label: 'UPI' },
    { id: 'RequestedPay', label: 'Requested Pay' },
    { id: 'WalletBalance', label: 'Wallet Balance' },
    { id: 'Rating', label: 'Rating' },
    { id: 'status', label: "Accept/Reject" },
];



export const dummyDataForPayout = [
    { id: 11, OrderID: '10', Requester: 'Vendor', RequesterName: 'Hane Doe', Upi: '8775787855', RequestedPay: "2500", WalletBalance: '5000', Rating: '4', status: 'pending' },
    { id: 12, OrderID: '10', Requester: 'Seller', RequesterName: 'Ebi Ra', Upi: '8775787855', RequestedPay: "800", WalletBalance: '5000', Rating: '4', status: 'pending' },
    { id: 13, OrderID: '10', Requester: 'Admin', RequesterName: 'Jane Doe', Upi: '8775787855', RequestedPay: "1000", WalletBalance: '7000', Rating: '4', status: 'pending' },
    { id: 14, OrderID: '10', Requester: 'Partner', RequesterName: 'John Smith', Upi: '8775787855', RequestedPay: "1200", WalletBalance: '8000', Rating: '4', status: 'pending' },
    { id: 15, OrderID: '10', Requester: 'Vendor', RequesterName: 'Alice Johnson', Upi: '8775787855', RequestedPay: "10000", WalletBalance: '9000', Rating: '4', status: 'pending' },
    { id: 16, OrderID: '10', Requester: 'Seller', RequesterName: 'Jane Doe', Upi: '8775787855', RequestedPay: "500", WalletBalance: '7000', Rating: '4', status: 'pending' },
    { id: 17, OrderID: '10', Requester: 'Partner', RequesterName: 'John Smith', Upi: '8775787855', RequestedPay: "1600", WalletBalance: '8000', Rating: '4', status: 'pending' },
];


export const columnsForShutDown = [
    { id: 'id', label: 'ID' },
    { id: 'Requester', label: 'Requested By' },
    { id: 'RequesterName', label: 'Requested Name' },
    { id: 'Date', label: 'Date' },
    { id: 'Reson', label: 'Reson' },
    { id: 'TotalRequestCount', label: 'TotalRequestCount' },
    { id: 'status', label: "Accept/Reject" },
];

export const dummyDataForShutDown = [
    { id: 21, Requester: 'Vendor', RequesterName: 'Hane Doe', Date: '8775787855', Reson: "2500", TotalRequestCount: '5000', status: 'pending' },
    { id: 22, Requester: 'Admin', RequesterName: 'Ebi Ra', Date: '8775787855', Reson: "800", TotalRequestCount: '5000', status: 'pending' },
    { id: 23, Requester: 'Admin', RequesterName: 'Jane Doe', Date: '8775787855', Reson: "1000", TotalRequestCount: '7000', status: 'pending' },
    { id: 24, Requester: 'Vendor', RequesterName: 'John Smith', Date: '8775787855', Reson: "1200", TotalRequestCount: '8000', status: 'pending' },
    { id: 25, Requester: 'Vendor', RequesterName: 'Alice Johnson', Date: '8775787855', Reson: "10000", TotalRequestCount: '9000', status: 'pending' },
    { id: 26, Requester: 'Admin', RequesterName: 'Jane Doe', Date: '8775787855', Reson: "500", TotalRequestCount: '7000', status: 'pending' },
    { id: 27, Requester: 'Vendor', RequesterName: 'John Smith', Date: '8775787855', Reson: "1600", TotalRequestCount: '8000', status: 'pending' },
];

export const columnsForTransferHistory = [
    { id: 'id', label: 'ID' },
    { id: 'TransferDate', label: 'Transfered Date' },
    { id: 'TransferTime', label: 'Transfered Time' },
    { id: 'TransferTo', label: 'Transfered To' },
    { id: 'ShopName', label: 'Shop Name ' },
    { id: 'MoblineNo', label: 'Mobline No ' },
    { id: 'pincode', label: 'pincode' },
    { id: 'products', label: 'Products' },
    { id: 'TransfterStatus', label: "Transfter Status" },
];

export const dummyDataForTransferHistory = [
    { id: 1, TransferDate: 'Hane Doe', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Jay', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 2, TransferDate: 'Ebi Ra', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Vijay', MoblineNo: '82768796987', pincode: "false", TransfterStatus: 'pending' },
    { id: 3, TransferDate: 'Jane Doe', TransferTime: '8775787855', ShopName: "false", TransferTo: 'Ajay', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 4, TransferDate: 'John Smith', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Raju', MoblineNo: '82768796987', pincode: "false", TransfterStatus: 'pending' },
    { id: 5, TransferDate: 'Alice Johnson', TransferTime: '8775787855', ShopName: "false", TransferTo: 'Moses', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 6, TransferDate: 'Jane Doe', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Tomy', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 7, TransferDate: 'John Smith', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Riju', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
];


export const columnsForDrivers = [
    { id: 'id', label: 'No' },
    { id: 'name', label: 'Driver Name' },
    { id: 'vehicleType', label: 'Vehicle Type' },
    { id: 'city', label: 'City' },
    { id: 'mobileNumber', label: 'Mobile No' },

    // { id: 'assigneeDetails', label: "Assignee" },
    // { id: 'orderTimings', label: 'Progress' },
    // { id: 'products', label: 'Products' },
    // { id: 'orderValue', label: 'Value' },
    // { id: 'ratings', label: 'Ratings' },
];

export const dataForDrivers = [{
    "id": 1,
    "name": "Stavros Gavahan",
    "vehicleType": "BUS",
    "city": "Wakduwa’ Barat",
    "mobileNumber": "793 792 2560"
}, {
    "id": 2,
    "name": "Floria Phizackarley",
    "vehicleType": "BUS",
    "city": "Curridabat",
    "mobileNumber": "700 916 0755"
}, {
    "id": 3,
    "name": "Rhett Fleischer",
    "vehicleType": "ALL",
    "city": "Minggang",
    "mobileNumber": "849 110 3147"
}, {
    "id": 4,
    "name": "Wilbur Sparkwell",
    "vehicleType": "TRUCK",
    "city": "Andradas",
    "mobileNumber": "856 441 1965"
}, {
    "id": 5,
    "name": "Kleon Pratchett",
    "vehicleType": "ALL",
    "city": "Ligang",
    "mobileNumber": "639 228 9276"
}, {
    "id": 6,
    "name": "Thia Dallison",
    "vehicleType": "BUS",
    "city": "Dadian",
    "mobileNumber": "380 535 4537"
}, {
    "id": 7,
    "name": "Brandice Jodrelle",
    "vehicleType": "TRUCK",
    "city": "Tawangsari",
    "mobileNumber": "225 890 6177"
}, {
    "id": 8,
    "name": "Duffie MacSharry",
    "vehicleType": "TRUCK",
    "city": "Panadtaban",
    "mobileNumber": "956 965 9948"
}, {
    "id": 9,
    "name": "Kendrick Lantaff",
    "vehicleType": "ALL",
    "city": "Likwatang Timur",
    "mobileNumber": "541 217 5065"
}, {
    "id": 10,
    "name": "Lela Cook",
    "vehicleType": "CAR",
    "city": "Fanrong",
    "mobileNumber": "928 921 2426"
}, {
    "id": 11,
    "name": "Mollie Harner",
    "vehicleType": "ALL",
    "city": "Malaya Dubna",
    "mobileNumber": "191 135 9955"
}, {
    "id": 12,
    "name": "Leena Restill",
    "vehicleType": "BUS",
    "city": "Jajce",
    "mobileNumber": "378 521 2118"
}, {
    "id": 13,
    "name": "Pieter Tomasz",
    "vehicleType": "TRUCK",
    "city": "Phayuha Khiri",
    "mobileNumber": "570 391 6959"
}, {
    "id": 14,
    "name": "Josias Chern",
    "vehicleType": "TRUCK",
    "city": "Huanggexi",
    "mobileNumber": "113 644 0878"
}, {
    "id": 15,
    "name": "Alister Ring",
    "vehicleType": "ALL",
    "city": "Bergen",
    "mobileNumber": "674 305 6687"
}, {
    "id": 16,
    "name": "Raddy Pideon",
    "vehicleType": "CAR",
    "city": "Haihui",
    "mobileNumber": "332 774 3451"
}, {
    "id": 17,
    "name": "Todd Tribell",
    "vehicleType": "ALL",
    "city": "Liuzikou",
    "mobileNumber": "936 295 6276"
}, {
    "id": 18,
    "name": "Reyna Ridings",
    "vehicleType": "ALL",
    "city": "Šuto Orizare",
    "mobileNumber": "879 622 6167"
}, {
    "id": 19,
    "name": "Nevile Roblett",
    "vehicleType": "BUS",
    "city": "Xiyuan",
    "mobileNumber": "739 434 6741"
}, {
    "id": 20,
    "name": "Bibbie Mainwaring",
    "vehicleType": "BUS",
    "city": "Kista",
    "mobileNumber": "398 189 9676"
}, {
    "id": 21,
    "name": "Vlad Simms",
    "vehicleType": "TRUCK",
    "city": "Atawutung",
    "mobileNumber": "935 806 1355"
}, {
    "id": 22,
    "name": "Nadia Hillum",
    "vehicleType": "TRUCK",
    "city": "Haapsalu",
    "mobileNumber": "202 933 4910"
}, {
    "id": 23,
    "name": "Zeke Theriot",
    "vehicleType": "TRUCK",
    "city": "Nanggorak",
    "mobileNumber": "355 242 6152"
}, {
    "id": 24,
    "name": "Tomlin Tabbernor",
    "vehicleType": "ALL",
    "city": "Naples",
    "mobileNumber": "941 619 1732"
}, {
    "id": 25,
    "name": "Georgeta Zamboniari",
    "vehicleType": "TRUCK",
    "city": "Conceição das Alagoas",
    "mobileNumber": "635 481 8788"
}, {
    "id": 26,
    "name": "Deeyn Godley",
    "vehicleType": "CAR",
    "city": "Subkowy",
    "mobileNumber": "445 227 9864"
}, {
    "id": 27,
    "name": "Wilmar Purcell",
    "vehicleType": "ALL",
    "city": "Chornorudka",
    "mobileNumber": "208 829 8096"
}, {
    "id": 28,
    "name": "Hermie Hacquel",
    "vehicleType": "CAR",
    "city": "El Soberbio",
    "mobileNumber": "517 419 8617"
}, {
    "id": 29,
    "name": "Nadia Trasler",
    "vehicleType": "CAR",
    "city": "Almelo",
    "mobileNumber": "787 338 9150"
}, {
    "id": 30,
    "name": "Larisa Winear",
    "vehicleType": "BUS",
    "city": "Zhangjiawo",
    "mobileNumber": "748 956 0121"
}];