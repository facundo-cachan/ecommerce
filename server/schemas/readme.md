Para usar archivos.graphql instalar:
# yarn add -D graphql-import babel-plugin-import-graphql

Y agregar el plugin en la config de babel:
# .babelrc -> "plugins": ["import-graphql"]

# Los fragmentos le permiten construir conjuntos de campos y luego incluirlos en consultas donde lo necesite.
# Aquí hay un ejemplo de cómo podría resolver la situación anterior utilizando fragmentos:

{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
   name
   appearsIn
  }
}



curl -XPOST "http://localhost:4000" -H'Content-Type: application/json' -d'{"query":"{heroes{id,name,friends,appearsIn}}"}'