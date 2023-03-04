
exports.getPagination = (page, items) => {
    page = page ? page : 1;
    items = items ? items : 10;

    const limit = +items;
    const newPage = +page;
    const offset = (newPage - 1) * limit;

    return { limit, offset };
};

exports.getDataWithPagination = (list, limit, offset, totalCount) => {
    const currentPage = offset / limit + 1;
    const totalPages = Math.ceil(totalCount / limit);
    const pageMeta = {};
    pageMeta.size = Number(limit);
    pageMeta.page = currentPage;
    pageMeta.totalCount = totalCount;
    pageMeta.totalPages = totalPages;
    return { pageMeta, list };
};
