const generator = require("../../helpers/generator");
const AppError = require('../../errors/AppError');

module.exports = ({ req }) => {
    const token = req.headers.authorization;

    return {
        validate() {
            try {
                const { id } = generator.verifyToken(token);

                return id;
            } catch (error) {
                throw new AppError('You are not authenticated');
            }
        }
    };
}