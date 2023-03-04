const restaurentRepository = require('../restaurent.repository');

module.exports = async ( id ) => {
    try {
        await restaurentRepository.deleteRestaurent(id);
    } catch (error) {
        throw new BadRequestException(error.message);
    }
};
