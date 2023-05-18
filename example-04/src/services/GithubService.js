const { RESTDataSource } = require('apollo-datasource-rest');
const AppError = require('../errors/AppError');

class GithubService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com';
    }

    async getUser(login) {
        try {
            return await this.get(`/users/${login}`);
        } catch (error) {
            if (error.extensions.response.status === 404) {
                throw new AppError(error.message);
            }
        }
    }
}

module.exports = new GithubService();