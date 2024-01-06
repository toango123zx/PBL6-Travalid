import * as analysisService from '../services/analysisService';

export const getTotalRevenueforAdmin = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        const startDate = new Date(`${start.split('/')[1]}-${start.split('/')[0]}-01`);
        
        const endMonth = parseInt(end.split('/')[0], 10);
        const endYear = parseInt(end.split('/')[1], 10);
        const lastDayOfMonth = new Date(endYear, endMonth, 0).getDate();
        const endDate = new Date(`${endYear}-${endMonth}-${lastDayOfMonth}`);
        
        const monthlyRevenues = [];
        let currentDate = new Date(startDate);
        
        while (currentDate <= endDate) {
            const nextMonthDate = new Date(currentDate);
            nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
            nextMonthDate.setDate(1);
            
            const completedOrders = await analysisService.getTotalRevenue(currentDate, nextMonthDate);
            
            const total = completedOrders.reduce((acc, order) => {
                return acc + order.info_bill.reduce((sum, item) => sum + item.schedule_product.price, 0);
            }, 0);
            
            const totalDiscount = completedOrders.reduce((acc, order) => acc + order.discount_value, 0);
            const totalRevenue = total - totalDiscount;
            
            monthlyRevenues.push({
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
                totalRevenue
            });
            
            currentDate = nextMonthDate;
        }
        
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully retrieved the total revenue.',
            data: {
                monthlyRevenues
            }
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving total revenue.',
        });
    }
};

export const getActiveDiscountsCountforAdmin = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        const startDate = new Date(`${start.split('/')[1]}-${start.split('/')[0]}-01`);
        
        const endMonth = parseInt(end.split('/')[0], 10);
        const endYear = parseInt(end.split('/')[1], 10);
        const lastDayOfMonth = new Date(endYear, endMonth, 0).getDate();
        const endDate = new Date(`${endYear}-${endMonth}-${lastDayOfMonth}`);
        
        const monthlyDiscountCounts = [];
        let currentDate = new Date(startDate);
        
        while (currentDate <= endDate) {
            const nextMonthDate = new Date(currentDate);
            nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
            nextMonthDate.setDate(1);
            
            const discounts = await analysisService.getActiveDiscountsCount(currentDate, nextMonthDate);
            const count = discounts.length;
            
            monthlyDiscountCounts.push({
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
                count
            });
            
            currentDate = nextMonthDate;
        }
        
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully retrieved the number of active discounts.',
            data: {
                monthlyDiscountCounts
            }
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving active discounts count.',
        });
    }
};

export const getProductCountByLocationforAdmin = async (req, res, next) => {
    try {
        const { id_location } = req.query;
        console.log(id_location);
        const products = await analysisService.getProductbyIdLocation(parseInt(id_location));
        
        if (products.length === 0) {
            return res.status(404).json({
                position: "id location",
                msg: "Not found Location"
            });
        }
        
        const system_name = await analysisService.getDislayNameByIdLocation(parseInt(id_location));
        const display_name = system_name.display_name;
        const count = products.length;
        
        res.status(200).json({
            status: 'success',
            msg: `Number of products in location with name '${display_name}': ${count}`,
            data: count
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving product count by location.',
        });
    }
};

export const getCompletedCustomersCountByTimeforAdmin = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        
        const startDate = new Date(`${start.split('/')[1]}-${start.split('/')[0]}-01`);
        
        const endMonth = parseInt(end.split('/')[0], 10);
        const endYear = parseInt(end.split('/')[1], 10);
        const lastDayOfMonth = new Date(endYear, endMonth, 0).getDate();
        const endDate = new Date(`${endYear}-${endMonth}-${lastDayOfMonth}`);
        
        const monthlyCompletedCustomers = [];
        let currentDate = new Date(startDate);
        
        while (currentDate <= endDate) {
            const nextMonthDate = new Date(currentDate);
            nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
            nextMonthDate.setDate(1);
            
            const completedCustomers = await analysisService.getCompletedCustomers(currentDate, nextMonthDate);
            const count = completedCustomers.length;
            
            monthlyCompletedCustomers.push({
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
                count
            });
            
            currentDate = nextMonthDate;
        }
        
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully retrieved the number of completed customers by time.',
            data: {
                monthlyCompletedCustomers
            }
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving completed customers count by time.',
        });
    }
};

export const getTotalRevenueforSupplier = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const { start, end } = req.query;
        
        const startDate = new Date(`${start.split('/')[1]}-${start.split('/')[0]}-01`);
        
        const endMonth = parseInt(end.split('/')[0], 10);
        const endYear = parseInt(end.split('/')[1], 10);
        const lastDayOfMonth = new Date(endYear, endMonth, 0).getDate();
        const endDate = new Date(`${endYear}-${endMonth}-${lastDayOfMonth}`);
        
        const monthlyRevenues = [];
        let currentDate = new Date(startDate);
        
        while (currentDate <= endDate) {
            const nextMonthDate = new Date(currentDate);
            nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
            nextMonthDate.setDate(1);
            
            const completedOrders = await analysisService.getTotalRevenue(currentDate, nextMonthDate, id_user);
            
            const total = completedOrders.reduce((acc, order) => {
                return acc + order.info_bill.reduce((sum, item) => sum + item.schedule_product.price, 0);
            }, 0);
            
            const totalDiscount = completedOrders.reduce((acc, order) => acc + order.discount_value, 0);
            const totalRevenue = total - totalDiscount;
            
            monthlyRevenues.push({
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
                totalRevenue
            });
            
            currentDate = nextMonthDate;
        }
        
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully retrieved the total revenue.',
            data: {
                monthlyRevenues
            }
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving total revenue.',
        });
    }
};

export const getActiveDiscountsCountforSupplier = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const { start, end } = req.query;
        
        const startDate = new Date(`${start.split('/')[1]}-${start.split('/')[0]}-01`);
        
        const endMonth = parseInt(end.split('/')[0], 10);
        const endYear = parseInt(end.split('/')[1], 10);
        const lastDayOfMonth = new Date(endYear, endMonth, 0).getDate();
        const endDate = new Date(`${endYear}-${endMonth}-${lastDayOfMonth}`);
        
        const monthlyDiscountCounts = [];
        let currentDate = new Date(startDate);
        
        while (currentDate <= endDate) {
            const nextMonthDate = new Date(currentDate);
            nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
            nextMonthDate.setDate(1);
            
            const discounts = await analysisService.getActiveDiscountsCount(currentDate, nextMonthDate, id_user);
            const count = discounts.length;
            
            monthlyDiscountCounts.push({
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
                count
            });
            
            currentDate = nextMonthDate;
        }
        
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully retrieved the number of active discounts.',
            data: {
                monthlyDiscountCounts
            }
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving active discounts count.',
        });
    }
};

export const getProductCountByLocationforSupplier = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const { id_location } = req.query;
        
        const products = await analysisService.getProductbyIdLocation(parseInt(id_location), id_user);
        
        if (products.length === 0) {
            return res.status(404).json({
                position: "id location",
                msg: "Not found Location"
            });
        }
        
        const system_name = await analysisService.getDislayNameByIdLocation(parseInt(id_location));
        const display_name = system_name.display_name;
        const count = products.length;

        res.status(200).json({
            status: 'success',
            msg: `Number of products in location with name '${display_name}': ${count}`,
            data: count
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving product count by location.',
        });
    }
};

export const getCompletedCustomersCountByTimeforSupplier = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const { start, end } = req.query;
        
        const startDate = new Date(`${start.split('/')[1]}-${start.split('/')[0]}-01`);
        
        const endMonth = parseInt(end.split('/')[0], 10);
        const endYear = parseInt(end.split('/')[1], 10);
        const lastDayOfMonth = new Date(endYear, endMonth, 0).getDate();
        const endDate = new Date(`${endYear}-${endMonth}-${lastDayOfMonth}`);
        
        const monthlyCompletedCustomers = [];
        let currentDate = new Date(startDate);
        
        while (currentDate <= endDate) {
            const nextMonthDate = new Date(currentDate);
            nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
            nextMonthDate.setDate(1);
            
            const completedCustomers = await analysisService.getCompletedCustomers(currentDate, nextMonthDate, id_user);
            const count = completedCustomers.length;
            
            monthlyCompletedCustomers.push({
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
                count
            });
            
            currentDate = nextMonthDate;
        }
        
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully retrieved the number of completed customers by time.',
            data: {
                monthlyCompletedCustomers
            }
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal server error in retrieving completed customers count by time.',
        });
    }
};