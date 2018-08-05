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
      hello: (root, args, context) => {
        

        let arry = ["a","b","c","d"]

        const newarr = arry.map(item=>{
          return item+"WOO!! "
        })

        return newarr.toString();

      },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (request) => {

      // get the user token from the headers
      const apikey = request.event.headers.api_key || '';

      
      if (apikey !== process.env.API_KEY) throw new Error('Invalid API Key'); 

      return { apikey }
      
    },
});
    
exports.graphql = server.createHandler();

exports.playgroundHandler = lambdaPlayground({
    endpoint:process.env.IS_OFFLINE?'/graphql':'/dev/graphql',
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