/* Importando o css dos quadrados do jogo da velha */
import "./Square.css";
/* Importando o framer motion para realizar as animações do jogo da velha
   O framer motion é uma biblioteca de movimentos pronta para produção para React. */
import { motion } from "framer-motion";

/* Definindo um componente funcional chamado Square que aceita três propriedades como argumentos: ind (índice do quadrado), updateSquares (função para atualizar os quadrados quando clicados) e clsName (classe CSS associada ao quadrado).*/
const Square = ({ ind, updateSquares, clsName }) => {
    /*Definindo uma função handleClick que será chamada quando o quadrado for clicado. Ela chama a função updateSquares passando o índice do quadrado (ind) como argumento.*/
    const handleClick = () => {
        updateSquares(ind);
    };
    return (
        /*Renderizando um elemento div com animações do Framer Motion. O atributo initial define o estado inicial da animação (escala 0), e o atributo animate define o estado final da animação (escala 1). A classe CSS "square" é aplicada ao elemento, e o evento de clique (onClick) é associado à função handleClick. */
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="square"
            onClick={handleClick}
        >
            {/* Verificando se a propriedade clsName existe e não é falsa. Se clsName tiver um valor (ou seja, se o quadrado foi preenchido), o código renderizará o conteúdo dentro do bloco condicional. */}
            {clsName && (
                /*Renderizando um elemento span com animações do Framer Motion. O atributo initial define o estado inicial da animação (escala 0), e o atributo animate define o estado final da animação (escala 1). A classe CSS associada ao quadrado preenchido é aplicada ao elemento. */
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={clsName}
                ></motion.span>
            )}
        </motion.div>
    );
};

export default Square;