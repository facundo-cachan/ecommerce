/**
 * https://www.apollographql.com/docs/apollo-server/schema/creating-directives/#synthesizing-unique-ids
 */
import { SchemaDirectiveVisitor } from "apollo-server";
import { GraphQLID } from "graphql";
import { createHash } from "crypto";

export default class extends SchemaDirectiveVisitor {
  visitObject(type) {
    const { name = "uid", from } = this.args;
    const fields = type.getFields();
    if (name in fields) {
      throw new Error(`Conflicting field name ${name}`);
    }
    fields[name] = Object.assign(
      Object.create(fields[Object.keys(fields)[0]]),
      {
        name,
        type: GraphQLID,
        description: "Unique ID",
        args: [],
        resolve() {
          return "uid";
        },
      }
    );
  }
}
