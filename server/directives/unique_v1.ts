/**
 * https://www.apollographql.com/docs/apollo-server/schema/creating-directives/#synthesizing-unique-ids
 */
import { SchemaDirectiveVisitor } from "apollo-server";
import { GraphQLID } from "graphql";
import { createHash } from "crypto";

export default class extends SchemaDirectiveVisitor {
  visitObject(type) {
    const { name, from } = this.args;
    const fields = type.getFields();
    if (name in fields) {
      throw new Error(`Conflicting field name ${name}`);
    }
    fields[name] = {
      name,
      type: GraphQLID,
      description: "Unique ID",
      args: [],
      resolve(object) {
        const hash = createHash("sha1");
        hash.update(type.name);
        from.forEach((fieldName) => hash.update(String(object[fieldName])));
        return hash.digest("hex");
      },
    };
  }
}
