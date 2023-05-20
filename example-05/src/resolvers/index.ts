interface IUser {
    id: number;
    name: string;
    email: string;
}

let dataUsers: IUser[] = [];

export default {
    Query: {
        users: () => dataUsers,
    },
    Mutation: {
        createUser(_, { user }, { pub }) {
            const newUser = { ...user, id: dataUsers.length + 1 };
            dataUsers.push(newUser);
            pub.publish('USER_ADDED', {
                userAdded: newUser,
            });
            return newUser;
        }
    },
    Subscription: {
        userAdded: {
            subscribe: (obj, args, { pub }) => {
                return pub.asyncInterator(['USER_ADDED']);
            }
        }
    }
}