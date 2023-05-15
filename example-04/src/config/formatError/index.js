const AppError = require("../../errors/AppError");

module.exports = error => {
    if (error.originalError instanceof AppError) {
        return new Error(error.message);
    }

    return error;
}