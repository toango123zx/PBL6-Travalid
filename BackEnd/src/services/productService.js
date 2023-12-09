const { prisma } = require('../config/prismaDatabase');

export const createProduct = async (id_product, id_user, role) => {
    if (String(role) == "admin") {
        id_user = {
            not: -1
        };
    } else {
        if (!String(role).includes("supplier")) {
            return false;
        };
        id_user = Number(id_user);
    };
    try {
        return await prisma.product.findFirst({
            select: {
                id_product: true,
            },
            where: {
                id_product: Number(id_product),
                id_user: id_user

            }
        });
    } catch (e) {
        return false;
    };
};


export const getProduct = async (id_product) => {
    try {
        return await prisma.product.findFirst({
            where: {
                id_product: Number(id_product),
            }
        });
    } catch (e) {
        return false;
    };
};

export const getAllProductForSupplier = async (id_user,start,limit) => {
    try {
        
        return await prisma.product.findMany({
            where : {
                id_user : id_user,
            },
            select: {
                id_product: true,
                name: true,
                city: true,
                time: true,
                quantity: true,
                location: {
                    select : {
                        display_name : true
                    }
                },
                status: true,
                avg_rate: true,
                count_complete: true,
            },
            
            skip: start,
            take: limit,
        });
    }
    catch (err) {
        return false;
    }
}

export const getAllScheduleForSupplier = async  (start,limit) => {
    try {
        
        return await prisma.schedule_Product.findMany({
            select: {
                id_product: true,
                name: true,
                city: true,
                time: true,
                quantity: true,
                location: {
                    select : {
                        display_name : true
                    }
                },
                status: true,
                avg_rate: true,
                count_complete: true,
            },
            skip: start,
            take: limit,
        });
    }
    catch (err) {
        return false;
    }
}



export const setStatusProduct = async (id_product, id_user, role, status) => {
    let __status;
    let product = {
        id_product : id_product,
        status : status
    }
    switch (String(status)) {
        case 'active':
            if(role === 'admin'){
                __status = 'active';
                product.status = 'warning'
            }
            if(role.includes('supplier')){
                __status = 'active';
                product.id_user = id_user;
                product.status = 'waiting'
            }
            break;
        case 'inactive':
            if(role === 'admin'){
                __status = 'inactive';
                product.status = 'warning'
            }
            if(role.includes('supplier')){
                __status = 'inactive';
                product.id_user = id_user;
                product.status = 'waiting'
            }
            break;

        case 'waiting':
            if(role.includes('supplier')){
                __status = 'waiting';
                product.id_user = id_user;
                product.status = 'active'
            }
            break;

        case 'warning':
            if(role === 'admin'){
                __status = 'warning';
                product.status = 'active'
            }
            break;
        default :
            return false;

    };
    try {
        return await prisma.product.update({
            where: product,
            data: {
                status: __status
            }
        })


    } catch (error) {
        console.log(error)
    }
}

export const getCurrentStatus = async (id_product) => {
    try {
        const current_status = await prisma.product.findUnique({
            where: {
                id_product: id_product
            },
            select: {
                status: true
            }
        })
        return current_status.status;
    } catch (e) {
        return false;
    }

}