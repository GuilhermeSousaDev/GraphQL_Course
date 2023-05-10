const db = require('../db');

class TaskService {
    getTasks(userId) {
        return db("tasks").where({ user_id: userId });
    }
}

module.exports = new TaskService();