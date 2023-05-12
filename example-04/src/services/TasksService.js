const db = require('../db');

class TaskService {
    find(userId) {
        return db("tasks").where({ user_id: userId });
    }

    create(userId, data) {
        return db("tasks").insert({ user_id: userId, ...data }).returning('*');
    }

    update(taskId, data) {
        return db("tasks").where({ id: taskId }).update(data).returning('*');
    }

    delete(taskId) {
        return db("tasks").where({ id: taskId }).delete();
    }
}

module.exports = new TaskService();