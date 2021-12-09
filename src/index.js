require("./models/todo");

const { GraphQLServer } = require("graphql-yoga");

const db = require("./database");

const queries = require("./resolvers/queries");
const mutations = require("./resolvers/mutations");

(async function () {
  try {
    await db.sync();

    graphqlServer = new GraphQLServer({
      typeDefs: "./src/scheema.graphql",
      resolvers: {
        Query: queries,
        Mutation: mutations,
      },
    });

    graphqlServer.start();
  } catch (error) {
    console.log(error);
    return;
  }

  console.log("Done!");
})();
