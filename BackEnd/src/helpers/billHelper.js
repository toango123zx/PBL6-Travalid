export const formatBillFormDb = (bill) => {
    let sum = 0;
    bill.schedule_product = bill.info_bill.map((__valueInfoBill) => {
        __valueInfoBill = {
            ...__valueInfoBill.info_bill,
            ...__valueInfoBill.schedule_product,
            ...__valueInfoBill.schedule_product.product,
            ...__valueInfoBill.schedule_product.product.location
        };
        delete __valueInfoBill.schedule_product;
        delete __valueInfoBill.product;
        delete __valueInfoBill.location;
        sum += __valueInfoBill.price;
        return __valueInfoBill;
    });
    bill.cost = sum
    bill.voucher = -(bill.discount.value * sum / 100);
    bill.total = sum + bill.voucher;
    delete bill.discount;
    delete bill.info_bill;
    return bill;
};