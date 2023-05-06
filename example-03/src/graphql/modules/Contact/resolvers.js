module.exports = {
    Query: {
        contacts: async (_, args, { UserService }) => await UserService.find(),
    },
    Mutation: {
        createContact: async (_, { data }, { UserService }) => await UserService.create(data),
        updateContact: async (_, { id, data }, { UserService }) => await UserService.update(id, data),
        deleteContact: async (_, { id }, { UserService }) => await UserService.delete(id),
    }
}