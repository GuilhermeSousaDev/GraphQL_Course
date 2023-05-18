const jwt = require('jsonwebtoken');

module.exports = {
    createToken(id) {
        return jwt.sign({ id }, 'sashid298y63289asi', { expiresIn: '1d' });
    },
    verifyToken(token) {
        return jwt.verify(token, 'sashid298y63289asi');
    }
}