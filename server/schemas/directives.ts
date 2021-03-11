import { gql } from "apollo-server";
export default gql`
  directive @upper on FIELD_DEFINITION
  directive @date(defaultFormat: String = "mmmm d, yyyy") on FIELD_DEFINITION
  # directive @auth(requires: Roles = SysAdmin) on OBJECT | FIELD_DEFINITION
  directive @unique(
    # The name of the new ID field, "uid" by default:
    name: String = "uid"
    # Which fields to include in the new ID:
    from: [String] = ["id"]
  ) on OBJECT

  type Subscription {
    _: Boolean
  }
`;
