const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers, mergeTypeDefs } = require('@graphql-tools/merge');

const allTypeDefs = loadFilesSync(path.resolve(__dirname, 'modules', '**', '*.gql'));
const allResolvers = loadFilesSync(path.resolve(__dirname, 'modules', '**', 'resolvers.js'));

const typeDefs = mergeTypeDefs(allTypeDefs);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };