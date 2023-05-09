module.exports = {
    Query: {
        async user(_, { login }, { dataSources }) {
            const foundedUser = await dataSources.userService.findUserByLogin(login);

            if (foundedUser.length) {
                return foundedUser[0];
            }

            const { login: loginGit, avatar_url } = await dataSources.githubService.getUser(login);

            return await dataSources.userService.create({
                login: loginGit,
                avatar_url,
            });
        }
    }
}