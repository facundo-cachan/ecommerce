import { SchemaDirectiveVisitor } from "apollo-server";
import { defaultFieldResolver } from "graphql";
import formatDate from "dateformat";

export default class extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field,
      { defaultFormat } = this.args;
    field.resolve = async (source, { format, ...otherArgs }, context, info) => {
      const date = await resolve.call(this, source, otherArgs, context, info);
      return formatDate(date, format || defaultFormat);
    };
  }
}
