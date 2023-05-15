const db = require('../db');
const AppError = require('../errors/AppError');

class TaskService {
    find(userId) {
        return db("tasks").where({ user_id: userId });
    }

    async findById(id) {
        const task = await db("tasks").where({ id });

        if (!task.length) {
            throw new AppError('Task not Found');
        }

        return [...task][0];
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