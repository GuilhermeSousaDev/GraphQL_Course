const db = require('../../../db');

module.exports = {
    Query: {
        contacts: async () => await db("contacts"),
    },
    Mutation: {
        createContact: async (_, { data }) => await db("contacts").insert(data, ['id']),
        updateContact: async (_, { id, data }) => await db("contacts").where({ id }).update(data),
        deleteContact: async (_, { id }) => await db("contacts").where({ id }).delete(),
    }
}