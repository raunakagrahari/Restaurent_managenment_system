
exports.getPagination = (page, items) => {
    page = page ? page : 1;
    items = items ? items : 10;

    const limit = +items;
    const newPage = +page;
    const offset = (newPage - 1) * limit;

    return { limit, offset };
};

