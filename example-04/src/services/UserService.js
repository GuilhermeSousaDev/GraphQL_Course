const db = require('../db');

class UserService {
    create(data) {
        const createdUser = db("users").insert(data).returning('*');

        return createdUser;
    }

    findUserByLogin(login) {
        return db("users").where({ login });
    }
}

module.exports = new UserService();