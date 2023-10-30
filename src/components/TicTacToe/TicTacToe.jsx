/* Importa os módulos motion e AnimatePresence da biblioteca Framer Motion. 
Esses módulos são usados para criar animações em componentes. */
import { motion, AnimatePresence } from "framer-motion";
/* Importa o módulo useState da biblioteca React.
 useState é um hook que permite adicionar o estado 
 a um componente funcional. */
import { useState } from "react";
/* Importando várias imagens e componentes necessários para a aplicação, incluindo imagens de Bulbasaur e um logotipo, bem como os componentes Button e Square. Também importa um arquivo de estilo CSS chamado "TicTacToe.css". */
import bulbasaurB from '../../assets/bulbasaurB.gif';
import pokeVelha from '../../assets/pokeVelha.png';
import Button from "./Button";
import Square from "./Square";
import "./TicTacToe.css";

/*Este componente representa o código principal jogo da velha com uma interface de usuário interativa. Ele usa o React e o Framer Motion para criar animações e estados para gerenciar o jogo. O jogo possui lógica para determinar o vencedor e quando o jogo termina em empate. Também há uma funcionalidade de reiniciar o jogo quando ele termina. Além disso, o código renderiza imagens de Pokémon e usa classes de estilo para estilizar a interface do jogo. */
function TicTacToe() {
    /*Define três estados iniciais do componente usando o hook useState. squares é um array que representa os quadrados do jogo, turn indica de quem é a vez de jogar ("x" ou "o"), e winner guarda o vencedor do jogo (ou null se não houver vencedor). */
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("x");
    const [winner, setWinner] = useState(null);

    /*Definindo uma função checkEndTheGame que verifica se o jogo chegou ao fim (empate). Ela percorre o array squares e retorna false se houver pelo menos um quadrado vazio, indicando que o jogo ainda está em andamento. Caso contrário, retorna true, indicando que o jogo terminou em empate. */
    const checkEndTheGame = () => {
        for (let square of squares) {
            if (!square) return false;
        }
        return true;
    };

    /*Definindo uma função checkWinner que verifica se há um vencedor do jogo. Ela verifica se alguma das combinações definidas em combos (matriz de índices) contém três quadrados consecutivos com o mesmo valor (ou seja, se "x" ou "o" ganhou).*/
    const checkWinner = () => {
        const combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combo of combos) {
            const [a, b, c] = combo;
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    /* Definindo uma função updateSquares que atualiza o estado do jogo quando um quadrado é clicado. Ela verifica se o quadrado já está preenchido ou se já há um vencedor (winner). Se nenhuma dessas condições for atendida, a função atualiza o estado squares, o turno do jogador (turn), verifica se há um vencedor e se o jogo terminou em empate.*/
    const updateSquares = (ind) => {
        if (squares[ind] || winner) {
            return;
        }
        const s = squares;
        s[ind] = turn;
        setSquares(s);
        setTurn(turn === "x" ? "o" : "x");
        const W = checkWinner();
        if (W) {
            setWinner(W);
        } else if (checkEndTheGame()) {
            setWinner("x | o");
        }
    };
    /*Definindo uma função resetGame que redefine o estado do jogo para iniciar um novo jogo. Ela reinicia o array squares, o turno do jogador (turn) e o vencedor (winner). */
    const resetGame = () => {
        setSquares(Array(9).fill(""));
        setTurn("x");
        setWinner(null);
    };

    return (
        /*Abrindo um fragmento React vazio (<> e </>) para envolver vários elementos sem criar um elemento DOM adicional. */
        <>
        {/* Criando elementos div para organizar a interface do jogo. */}
        <div className="flex-jogo-imagem">
        <div className="tic-tac-toe">  
            {/* Renderizando o componente Button para reiniciar o jogo, passando a função resetGame como propriedade. */}
            <Button resetGame={resetGame} />
            {/* Renderizando os nove quadrados do jogo como componentes Square. Cada quadrado é criado em um loop, passando a chave (key), o índice (ind), a função updateSquares e a classe CSS correspondente a partir do estado squares. */}
            <div className="game">
                {Array.from("012345678").map((ind) => (
                    <Square
                        key={ind}
                        ind={ind}
                        updateSquares={updateSquares}
                        clsName={squares[ind]}
                    />
                ))}
            </div>
            {/* Renderizando uma representação visual de quem está jogando ("x" ou "o") com base no estado turn. Isso inclui os ícones "x" e "o". */}
            <div className={`turn ${turn === "x" ? "left" : "right"}`}>
                <Square clsName="x" />
                <Square clsName="o" />
            </div>
            {/* Inicia a seção de animações usando o componente AnimatePresence do Framer Motion. Isso permite animações ao entrar ou sair de elementos. */}
            <AnimatePresence>
            {/* Iniciando uma condicional que verifica se há um vencedor (winner) e, se houver, renderiza as animações de vitória. */}
                {winner && (
                    /*Criando um contêiner animado usando motion.div. Ele define animações para entrada e saída, bem como uma classe "winner".*/
                    <motion.div
                        key={"parent-box"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="winner"
                    >
                        {/* Criando um contêiner filho animado com animações de escala e transparência. */}
                        <motion.div
                            key={"child-box"}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text"
                        >
                            {/* Renderiza um título animado com animações de escala e translação. */}
                            <motion.h2
                                initial={{ scale: 0, y: 100 }}
                                animate={{
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        y: { delay: 0.7 },
                                        duration: 0.7,
                                    },
                                }}
                            >
                                {/* Renderiza o texto dependendo do vencedor. Se o vencedor for "x | o", mostra "Deu Velha :/". Caso contrário, mostra "O PokéVencedor é:". */}
                                {winner === "x | o"
                                    ? "Deu Velha :/"
                                    : "O PokéVencedor é: "}
                            </motion.h2>
                            {/* Cria um contêiner animado para mostrar o vencedor do jogo. Ele tem uma animação de escala. */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: {
                                        delay: 1.3,
                                        duration: 0.2,
                                    },
                                }}
                                className="win"
                            >
                                {/* Renderiza o vencedor do jogo. Se for empate ("x | o"), exibe ambos os símbolos "x" e "o". Caso contrário, exibe o vencedor específico. */}
                                {winner === "x | o" ? (
                                    <>
                                        <Square clsName="x" />
                                        <Square clsName="o" />
                                    </>
                                ) : (
                                    <>
                                        <Square clsName={winner} />
                                    </>
                                )}
                            </motion.div>
                            {/* Cria um contêiner animado para o botão de reiniciar o jogo. */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: { delay: 1.5, duration: 0.3 },
                                }}
                            >
                                {/* Renderiza o componente Button para reiniciar o jogo. */}
                                <Button resetGame={resetGame} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        {/* Cria um contêiner com a classe "imagens-poke". */}
        <div className="imagens-poke">
                {/* Renderiza uma imagem do logotipo do jogo com um atributo alt. */}
                <img className="titulo-logo" src={pokeVelha} alt="Logo do jogo"/>
                {/* Renderiza um GIF do Bulbasaur com um atributo alt. */}
                <img className="bulbasaur" src={bulbasaurB} alt="Bulbasaur"/>
            </div> 
        </div>
         
    </>
    );
}

export default TicTacToe;