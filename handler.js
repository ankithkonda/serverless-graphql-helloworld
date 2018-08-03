import { ApolloServer, gql } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda'


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
    hello: String
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
    
exports.graphql = server.createHandler();

exports.playgroundHandler = lambdaPlayground({
  endpoint: '/dev/graphql',
})


exports.hello = (event, context, callback) => {

  let arry = ["a","b","c","d"]

  const newarr = arry.map(item=>{
    return item+"WOO!! "
  })




  var item = {
    statusCode:200,
    body:"well this works great!!"+newarr.toString(),
  }



  callback(null, item);
}