// Importa a biblioteca React e a renomeia para um namespace React. 
import * as React from "react";

/* Importa as funções styled e alpha da biblioteca 
Material-UI para criação de estilos personalizados. */
import { styled, alpha } from "@mui/material/styles";

/*Importa vários componentes e ícones do Material-UI 
que serão usados para construir a barra de navegação. */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

/*Importa a função useNavigate do React Router,
que será usada para navegar entre páginas. */
import { useNavigate } from "react-router-dom";

/*Definindo um componente estilizado chamado Search usando a função styled. Esse componente cria a caixa de pesquisa na barra de navegação e aplica estilos personalizados, como borda arredondada e mudança de cor ao passar o mouse sobre ele. */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

/*Define um componente estilizado chamado SearchIconWrapper que envolve o ícone de pesquisa. Ele define o posicionamento absoluto e estilos para centralizar o ícone na caixa de pesquisa. */
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

/*Define um componente estilizado chamado StyledInputBase, que é uma versão personalizada do componente InputBase do Material-UI. Ele aplica estilos ao campo de entrada de texto, como espaçamento, largura, efeitos de transição e tamanho do texto. */
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

/*Define um componente React chamado Navbar, que aceita duas propriedades: pokemonFilter e hideSearch. Este componente representa a barra de navegação na parte superior da página. */
export default function Navbar({ pokemonFilter, hideSearch }) {
  /* Utilizando a função useNavigate para obter a função de navegação, 
  que permite redirecionar o usuário para diferentes páginas. */
  const navigate = useNavigate();
  return (
    /*Criando um contêiner Box que define estilos de espaçamento e flexibilidade. Ele possui uma margem inferior de 2em. */
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      {/* Utilizando o componente AppBar do Material-UI para a barra de navegação. Define sua posição como "static" e aplica um estilo de fundo personalizado. */}
      <AppBar position="static" sx={{ backgroundColor: "#335871" }}>
        {/* Criando a barra de ferramentas dentro do AppBar. */}
        <Toolbar>
          {/* Criando um contêiner Box que usa flexbox para posicionar elementos na barra de navegação. Ele abrange toda a largura da barra. */}
          <Box display="flex" justifyContent="space-between" width="100%">
          {/* Insere uma imagem do logotipo do Pokémon no canto esquerdo da barra de navegação. O atributo onClick redireciona o usuário para a página raiz quando a imagem é clicada. */}
            <Box component="img" src="/assets/pokemon-logo.png" height="3em" sx={{ cursor: "pointer" }} onClick={() => navigate("/")} />
            {/* Verifica se a propriedade hideSearch é falsa. Se for falsa, exibe a caixa de pesquisa, que inclui um ícone de pesquisa e um campo de entrada de texto. Quando o texto é alterado, a função pokemonFilter é chamada para filtrar os Pokémon com base no que o usuário digita. */}
            {!hideSearch && (
              <Search onChange={(e) => pokemonFilter(e.target.value)}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Pesquisar Pokémon..." inputProps={{ "aria-label": "search" }} />
              </Search>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}