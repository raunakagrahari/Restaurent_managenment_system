

class BadRequestException extends Error {
    constructor(message, err = null) {
        super(message);
        this.type = 'Bad Request';
        this.statusCode = "bad request";
        this.err = err;
    }
}

module.exports = BadRequestException;
