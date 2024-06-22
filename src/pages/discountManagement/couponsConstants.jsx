const couponType = ['first buy', 'purchase above 2500', 'on 10 successfull order', 'while making first monthly pack'];
const cashBacktypes = ['Order above' , 'refer a friend']
const products = ['product 1 ' , 'product 2 ' , 'product 3' , 'All']
// coupons for all users

// first buy 
// purchase above 2500
// on 10 successfull order 
// while making first monthly pack
export const couponConstants = [  
 
// first buy
{ name: 'couponType', label: 'coupon Type', type: 'select', options: couponType , rules: [{ required: true, message: 'Please select Coupon type' }] },
  { name: 'CouponName', label: 'Coupon Name', type: 'text', rules: [{ required: true, message: 'Please enter the Coupo Name' }] },
  { name: 'CouponCode', label: 'Coupon Code', type: 'text', rules: [{ required: true, message: 'Please enter the wholesale rate' }] },
  { name: 'DiscountAmount', label: 'Discount Amount', type: 'text', rules: [{ required: true, message: 'Please enter the product weight' }] },
  { name: 'MinimumPurchase', label: 'Minimum Purchase', type: 'text', rules: [{ required: true, message: 'Please enter the product description' }] },
  { name: 'MinimumOrderCount', label: 'Minimum Order Count', type: 'text', rules: [{ required: true, message: 'Please enter the product description' }] },
// purchase above 2500
// cupon for specif order count
// cupon for specif order count

];


// wallet cashback offers for specif user 

// get 50 rs cashback for order above 1000  // order value above cashback
// get 50 rs cashback by refering a frnd    //  refer a frnd and get 50 cashback on their first order

export const cashbackInputs = [
        // cashback for order above some point
        { name: 'cashBackType', label: 'cashBack Type', type: 'select', options: cashBacktypes , rules: [{ required: true, message: 'Please select Coupon type' }] },
        { name: 'cashBackName', label: 'cashBack Name', type: 'text', rules: [{ required: true, message: 'Please enter the Coupo Name' }] },
        { name: 'OrderValueLimit', label: 'OrderValue Limit', type: 'text', rules: [{ required: true, message: 'Please enter the product weight' }] },
        { name: 'minimumReferCount', label: 'minimum ReferCount', type: 'text', rules: [{ required: true, message: 'Please enter the product weight' }] },
        { name: 'CashbackAmount', label: 'cashback amount', type: 'text', rules: [{ required: true, message: 'Please enter the product weight' }] },
        // refering a frnd 

]


export const RefundInputs = [
        // cashback for order above some point
        { name: 'orderId', label: 'Order id', type: 'text', rules: [{ required: true, message: 'Please select Coupon type' }] },
        { name: 'RefundAmount', label: 'RefundAmount', type: 'text', rules: [{ required: true, message: 'Please enter the Coupo Name' }] },
        { name: 'Refund Product', label: 'Refund Product', type: 'select', options: products, rules: [{ required: true, message: 'Please enter the product weight' }] },
        { name: 'AdminPay', label: 'Admin Pay', type: 'text', rules: [{ required: true, message: 'Please enter the product weight' }] },
        { name: 'vendorPay', label: 'Vendor Pay', type: 'text', rules: [{ required: true, message: 'Please enter the product weight' }] },
        // refering a frnd 

]
