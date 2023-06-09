module.exports = {
    Query: {
        async tasks(_, __, { dataSources, validate }) {
            const userId = validate();
            console.log(userId);
            return await dataSources.taskService.find(userId);
        },
        async task(_, { id }, { dataSources }) {
            return await dataSources.taskService.findById(id);
        }
    },
    Mutation: {
        async createTask(_, { data }, { dataSources, userId }) {
            return await dataSources.taskService.create(userId, data);
        },
        async deleteTask(_, { id }, { dataSources }) {
            return await dataSources.taskService.delete(id);
        },
        async updateTask(_, { id, data }, { dataSources }) {
            return await dataSources.taskService.update(id, data);
        }
    }
}