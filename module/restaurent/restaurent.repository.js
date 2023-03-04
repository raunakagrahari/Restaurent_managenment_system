const { Restaurents } = require('./../../models');
const { pagination } = require('../../utilities');
const { Op } = require('sequelize');
const { object } = require('joi');


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
    // where[Op.and] = [];

    const { limit, offset } = pagination.getPagination(params.page, params.items);
    // console.log(params)

    where[Op.and] = [];

    if (params.search) {
        where[Op.and].push({
            [Op.or]: [
                {
                    cost:params.search,
                },
            ],
        });
    }
    console.log(where)

    if (params.filter) {
        where.cuisineTypes = { [Op.contains]: [params.filter] }
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