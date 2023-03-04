const bcrypt = require('bcrypt');

exports.verifyPassword = (plainPassword, hashPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, hashPassword, function (err, result) {
            resolve(result);
            reject(err);
        });
    });
};

exports.generatePassword = (plainPassword) => {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(plainPassword, salt, function (err, hash) {
                resolve(hash);
                reject(err);
            });
        });
    });
};
