const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const allTypeDefs = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'));
const allResolvers = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'));

const typeDefs = mergeTypeDefs(allTypeDefs);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };