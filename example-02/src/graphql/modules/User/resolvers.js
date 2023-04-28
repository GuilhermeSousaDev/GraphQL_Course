const db = require('../../../db');

module.exports = {
    User: {
        profile: (obj) => db.profiles.find(profile => profile.id === obj.id),
    },
    Query: {
        user: (_, args) => db.users.find(user => user.id === args.id),
        users: () => db.users,
    }
}