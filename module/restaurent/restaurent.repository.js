const { Restaurents } = require('./../../models');
const { pagination } = require('../../utilities');
const { Op } = require('sequelize');


exports.createRestaurent = (data, t = null) => {
    return Restaurents.create(data, { transaction: t });
};

exports.getRestaurentById = async (id) => {
    return await Restaurents.findOne({
        where: {
            id,
        },
    });
};

// exports.getAllRestaurents = () => {
//     return Restaurents.findAll();
// };

exports.updateRestaurent = (data, id) => {
    return Restaurents.update(data, {
        where: {
            id,
        },
    });
};

exports.deleteRestaurent = (id) => {
    return Restaurents.destroy({
        where: {
            id,
        },
    });
};

exports.getAllRestaurents = async (params, t = null) => {
    const where = { vegOnly: true };


    const sortBy = params?.filter?.sortBy || "createdAt";
    const orderBy = params?.filter?.orderBy || "DESC";

    const { limit, offset } = pagination.getPagination(params.page, params.items);
    console.log(params)

    if (params.search) {
        where = {
            [Op.or]: [
                {
                    cost: {
                        [Op.in]: ['Low','High']
                    },
                }
            ],
            [Op.or]: [
                {
                    cuisineTypes: {
                        [Op.iLike]: `%${params.search}%`,
                    },
                }
            ],
        };
    }

    if (params.filter) {
        if (params.filter.from && params.filter.to) {
            where.createdAt = {
                [Op.between]: [params.filter.from, params.filter.to],
            };
        }
    }

    return await Restaurents.findAndCountAll(
        {
            where,
            limit,
            offset,
            order: [[sortBy, orderBy]],
        },
        { transaction: t }
    );
};