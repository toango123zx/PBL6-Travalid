export const formatBillFormDb = (bill) => {
    let sum = 0;
    bill.schedule_product = bill.info_bill.map((__valueInfoBill) => {
        __valueInfoBill = {
            ...__valueInfoBill,
            ...__valueInfoBill.schedule_product
        };
        sum += __valueInfoBill.price
        delete __valueInfoBill.schedule_product;
        
        return __valueInfoBill;
    });
    bill.cost = sum * bill.quantity;
    bill.total = bill.cost - bill.discount_value;
    delete bill.info_bill;

    return bill;
};