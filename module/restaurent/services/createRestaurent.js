const restaurentRepository = require('../restaurent.repository');
const { BadRequestException } = require('../../../helpers/errorResponse');

module.exports = async (data) => {
    try {
        const response = await restaurentRepository.createRestaurent(data);
        return response;
    } catch (error) {
        throw new BadRequestException(error.message);
    }
};
