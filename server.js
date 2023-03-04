const http = require('http');
const app = require('./app');
const { logger } = require('./utilities');
const port = 3000

const server = http.createServer(app);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error({
                message: `${bind} requires elevated privileges`,
                level: 'error',
            });
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error({
                message: `${bind} is already in use`,
                level: 'error',
            });
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Server listening at ${bind}`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);