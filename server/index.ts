import "dotenv/config";
import { ApolloServer, PubSub } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./schemas";
import resolvers from "./resolvers";
// import schemaDirectives from "./directives";
import models from "./models";
// import loaders from "./loaders";


const pubsub = new PubSub(),
  schema = makeExecutableSchema({
    typeDefs,
    resolvers
  }),
  server = new ApolloServer({
    introspection: true,
    playground: true,
    tracing: true,
    debug: true,
    /* logger: true, */
    schema,
    /* schemaDirectives, */
    /*
    formatError: (err) => {
      if (err.originalError instanceof AuthenticationError) {
        return new Error("Different authentication error message!");
      }
      // Don't give the specific errors to the client.
      if (err.message.startsWith("Database Error: ")) {
        return new Error("Internal server error");
      }
      // Otherwise return the original error.  The error can also
      // be manipulated in other ways, so long as it's returned.
      return err;
    },
    */
    context: async ({ req, connection }: any) => {
      if (connection) {
        console.log("\x1b[32m%s\x1b[0m", "Context: connection");
        return connection.context;
      }
      if (req) {
        console.log("\x1b[34m%s\x1b[0m", "Context: request");
        console.log("\x1b[36m%s\x1b[0m", "BODY VARIABLES", req.body.variables);
        return {
          query: req.body.query,
          token: req.body.variables.token,
          secret: process.env.SECRET,
          models,
          /* loaders, */
          pubsub,
        };
      } else {
        console.log("\x1b[36m%s\x1b[0m", "Check from:");
        const token = req.headers.token || "";
        console.log(token);
        return { token };
      }
    },
    subscriptions: {
      onConnect: (connectionParams, webSocket) => {
        console.log("\x1b[36m%s\x1b[0m", "subscriptions -> onConnect");
        if (connectionParams) {
          console.log(
            "\x1b[36m%s\x1b[0m",
            "subscriptions -> onConnect -> connectionParams"
          );
        }
        if (webSocket) {
          console.log(
            "\x1b[36m%s\x1b[0m",
            "subscriptions -> onConnect -> webSocket"
          );
          console.log(webSocket);
        }
        return {
          pubsub,
        };
      },
      onDisconnect: (webSocket, context) => {
        console.log(
          "\x1b[36m%s\x1b[0m",
          "subscriptions -> onDisconnect -> webSocket"
        );
        // console.log(webSocket, context)
      },
    },
  });

server.listen().then(({ url, subscriptionsUrl }) => {
  console.clear();
  console.log(`🚀   Server ready at ${url}`);
  console.log(`🚀   Subscriptions ready at ${subscriptionsUrl}`);
});
