
class PreconditionException extends Error {
    constructor(message, err = null) {
        super(message);
        this.type = 'Precondition Failed';
        this.statusCode = 412;
        this.err = err;
    }
}

module.exports = PreconditionException;
