/*Importando os componentes Skeleton do Material-UI e Container do sistema Material-UI. Além disso, importa a biblioteca React. Essas importações são necessárias para criar o componente Skeletons.*/
import { Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

/* Declara um componente funcional chamado Skeletons que é exportado como parte do módulo. Este componente não aceita argumentos e será usado para exibir uma tela de carregamento enquanto os dados de Pokémon estão sendo carregados. */
export const Skeletons = () => {
  return (
    /*Utilizando um componente Container do sistema Material-UI com a propriedade maxWidth definida como false, o que significa que o container não terá uma largura máxima. */
    <Container maxWidth={false}>
      {/* Utilizando um componente Skeleton do Material-UI para simular um elemento visual de carregamento. Ele usa a variante "rounded" para criar um esqueleto arredondado. A largura é definida como 100%, e a altura é definida como 250 pixels. As propriedades sx são usadas para definir estilos adicionais, incluindo uma margem inferior (espaço abaixo do elemento). */}
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
    </Container>
  );
};