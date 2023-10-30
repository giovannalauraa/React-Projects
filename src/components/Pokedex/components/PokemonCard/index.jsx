/*Importando a biblioteca React e a renomeia para um namespace React. 
Isso é uma prática comum ao usar o React para criar componentes. */
import * as React from "react";
/*Importando vários componentes do Material-UI, como Card, CardContent, CardMedia, Typography, Box, e CardActionArea. Esses são componentes da biblioteca Material-UI que serão usados para criar um cartão de exibição de informações sobre um Pokémon. */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
/*Importa uma função chamada typeHandler de um arquivo chamado "utils" no diretório "../utils". Esta função será usada para processar os tipos do Pokémon. */
import { typeHandler } from "../../utils";

/*Definindo um componente React chamado PokemonCard que aceita três propriedades como argumentos: name, image, e types. Este componente renderizará as informações do Pokémon com base nessas propriedades. Essa função PokemonCard cria um componente React que representa um cartão de exibição de informações sobre um Pokémon, exibindo seu nome, imagem e tipos. O estilo do cartão e a formatação dos tipos do Pokémon são personalizados usando o Material-UI e a função typeHandler.*/
export default function PokemonCard({ name, image, types }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#134e5e9c"}}>
       {/* Essa propriedade do mui material cria um componente Card com algumas propriedades de estilo personalizadas definidas usando a propriedade sx. Isso define a largura máxima do cartão e a cor de fundo. */}
      <CardActionArea>
      {/* Insere uma imagem do Pokémon no cartão usando CardMedia. Ele recebe a imagem do Pokémon através da propriedade image e define a altura da imagem como 200 pixels.*/}
        <CardMedia component="img" height="200" image={image} alt="Pokémon" />
        {/* Utilizando um componente CardContent, que contém o conteúdo do cartão, como o nome do Pokémon e seus tipos. */}
        <CardContent>
        {/* Utilizando um componente Box com estilo flexível, alinhando os itens no centro e espaçamento uniforme. */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Utilizando um componente Typography com um tamanho de texto maior (variant="h5") para exibir o nome do Pokémon. */}
            <Typography gutterBottom variant="h5" component="div">
            {/* Insere o nome do Pokémon dentro do componente Typography. */}
              {name}
            </Typography>
            {/* Utilizando outro componente Typography com um tamanho de texto menor (variant="caption") para exibir os tipos do Pokémon. */}
            <Typography gutterBottom variant="caption" component="div">
            {/* Chamando a função typeHandler passando a propriedade types como argumento e exibe o resultado dentro do componente Typography. A função typeHandler processará e formatará os tipos do Pokémon. */}
              {typeHandler(types)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}