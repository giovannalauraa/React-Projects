/* Definindo uma função chamada typeHandler que é exportada como parte de um módulo. A função aceita um argumento types. */
export const typeHandler = (types) => {
    /* Iniciando uma estrutura condicional verificando se o elemento no índice 1 do array types existe. Isso é usado para verificar se há dois tipos de Pokémon.  */
    if (types[1]) {
      /*Se houver dois tipos de Pokémon, esta linha de código concatena os nomes dos dois tipos separados por um caractere de barra vertical | e retorna a string resultante. Isso cria uma representação de dois tipos de Pokémon separados por um "OU". */
      return types[0].type.name + " | " + types[1].type.name;
    }
    /*Se não houver dois tipos (ou seja, types[1] não existe), esta linha de código simplesmente retorna o nome do tipo no índice 0 do array types. Isso significa que o Pokémon tem apenas um tipo. */
    return types[0].type.name;
  };