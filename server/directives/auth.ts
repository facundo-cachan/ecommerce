import { SchemaDirectiveVisitor } from "apollo-server";
import { defaultFieldResolver } from "graphql";

export default class extends SchemaDirectiveVisitor {
  visitObject(type) {
    this.ensureFieldsWrapped(type);
    type._requiredAuthRole = this.args.requires;
  }
  /**
   * Los métodos de visitante para tipos anidados,
   * como campos y argumentos, también reciben un objeto de detalles
   * que proporciona información sobre los tipos primarios y abuelos.
   */
  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType);
    field._requiredAuthRole = this.args.requires;
  }
  ensureFieldsWrapped(objectType) {
    /**
     * Marque el objeto GraphQLObjectType para evitar volver a ajustar:
     */
    if (objectType._authFieldsWrapped) return;
    objectType._authFieldsWrapped = true;
    const fields = objectType.getFields();
    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;

      field.resolve = async (...args) => {
        /**
         * Primero obtenga el Rol requerido del campo,
         * volviendo al objectType si el campo no requiere un Rol:
         */
        const requiredRole =
          field._requiredAuthRole || objectType._requiredAuthRole;
        if (!requiredRole) {
          return resolve.apply(this, args);
        }
        const context = args[2],
          user = context.me || {},
          isAuthorized = user.role === requiredRole;
        if (!isAuthorized) {
          throw new Error(`You need following role: ${requiredRole}`);
        }
        return resolve.apply(this, args);
      };
    });
  }
}
