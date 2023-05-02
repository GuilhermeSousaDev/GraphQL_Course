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
        createUser(_, { data }) {
            const { email } = data;

            const usersExists = db.users.find((user) => user.email === email);

            if (usersExists) {
                throw new Error("This User Already Exists");
            }

            const newUser = {
                ...data,
                id: generateId(db.users),
                profile_id: 2
            }

            db.users.push(newUser);

            return newUser;
        },
        updateUser(_, { id, data }) {
            const user = db.users.find(user => user.id === id);
            const index = db.users.findIndex(user => user.id === id);

            const newUser = {
                ...user,
                ...data,
            }

            db.users.splice(index, 1, newUser);
            
            return newUser;
        }
    }
}