const db = require('../../../../db');

class UserService {
    constructor(db) {
        this.service = db;
    }

    find() {
        return this.service("contacts");
    }

    create(data) {
        return this.service("contacts").insert(data);
    }

    update(id, data) {
        return this.service("contacts").where({ id }).update(data);
    }

    delete(id) {
        return this.service("contacts").where({ id }).delete();
    }
}

module.exports = new UserService(db);