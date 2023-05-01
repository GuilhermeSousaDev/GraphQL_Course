const db = require('../../../db');

function generateId(list) {
    return list[list.length - 1]?.id + 1 || 1;
}

module.exports = {
    User: {
        profile: (obj) => db.profiles.find(profile => profile.id === obj.id),
    },
    Query: {
        user: (_, args) => db.users.find(user => user.id === args.id),
        users: () => db.users,
    },
    Mutation: {
        createUser(_, args) {
            const { email } = args;

            const usersExists = db.users.find((user) => user.email === email);

            if (usersExists) {
                throw new Error("This User Already Exists");
            }

            const newUser = {
                ...args,
                id: generateId(db.users),
                profile_id: 2
            }

            db.users.push(newUser);

            return newUser;
        }
    }
}