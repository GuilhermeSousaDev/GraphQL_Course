const generator = require("../../../helpers/generator");

module.exports = {
    User: {
        async tasks(user, {}, { dataSources }) {
            return await dataSources.taskService.find(user.id);
        }
    },
    Query: {
        async user(_, { login }, { dataSources }) {
            const foundedUser = await dataSources.userService.findUserByLogin(login);

            if (foundedUser.length) {
                foundedUser[0].token = generator.createToken(foundedUser[0].id);
                return foundedUser[0];
            }

            const { login: loginGit, avatar_url } = await dataSources.githubService.getUser(login);

            const newUser = await dataSources.userService.create({
                login: loginGit,
                avatar_url,
            });

            newUser.token = generator.createToken(newUser.id);

            return newUser;
        }
    }
}