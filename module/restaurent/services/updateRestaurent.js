const { BadRequestException } = require('../../../helpers/errorResponse');
const restaurentRepository = require('../restaurent.repository');

module.exports = async (id, data) => {
    try {
        const isCurrencyIdExist = await restaurentRepository.getRestaurentById(id);
        console.log(isCurrencyIdExist);
        if (!isCurrencyIdExist) throw new BadRequestException('Not Found');
        await restaurentRepository.updateRestaurent(
            data,
            id
        );
    } catch (error) {
        throw new BadRequestException(error.message);
    }
};
