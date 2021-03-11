ya apollo-server dataloader dateformat graphql

yad @babel/{cli,core,node,preset-env} babel-plugin-add-module-exports babel-plugin-import-graphql babel-plugin-module-resolver babel-preset-minify babel-register dotenv graphql-tag 

curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ user(id:40003000) { ...on User{ userName: name } } }" }' http://localhost:4000/

=============================== JWT ===============================
HEADER:ALGORITHM & TOKEN TYPE
{
  "alg": "HS256",
  "typ": "JWT"
}

PAYLOAD:DATA
{
  "id": "28919439",
  "pass": "F4cund0!!",
  "exp": 1575466238189
}

VERIFY SIGNATURE
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  ultrasuperduperfucking.s3cr3tp455word
)