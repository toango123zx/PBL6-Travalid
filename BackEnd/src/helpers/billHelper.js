export const formatBillFormDb = (bill) => {
    let sum = 0;
    bill.schedule_product = bill.info_bill.map((__valueInfoBill) => {
        __valueInfoBill = {
            ...__valueInfoBill,
            ...__valueInfoBill.schedule_product
        };
        sum += __valueInfoBill.price
        delete __valueInfoBill.schedule_product
        return __valueInfoBill;
    });
    bill.cost = sum;
    bill.voucher = - (sum * bill.discount_value / 100)
    bill.total = sum + bill.voucher;
    delete bill.info_bill
    return bill;
};