const restaurentRepository = require('../restaurent.repository');
const { BadRequestException } = require('../../../helpers/errorResponse');

module.exports = async (params) => {
    try {
        const { page, items } = params;
        const search = params.search || null;
        const filter = params.filter ? JSON.parse(params.filter) : null;

        const queryParams = {
            page,
            items,
            filter,
            search,
        };

        let response = await restaurentRepository.getAllRestaurents(queryParams);
        const responsePayload = { pageMeta: { totalItems: response.count, page: +page, items: +items }, List: response.rows };
        return responsePayload;
    } catch (error) {
        console.log(error)
        throw new BadRequestException(error.message);
    }
};
