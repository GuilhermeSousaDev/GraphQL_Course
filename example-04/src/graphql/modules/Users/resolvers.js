module.exports = {
    Query: {
        user(_, { login }, { dataSources }) {
            return dataSources.githubService.getUser(login);
        }
    }
}