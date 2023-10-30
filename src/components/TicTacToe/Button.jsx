// Componente que retorna o botão para reiniciar o jogo da velha
const Button = ({ resetGame }) => {
    /*Retorna um elemento de botão HTML. Quando o botão é clicado, ele chama a função resetGame que foi passada como propriedade. O texto "Novo Jogo" é exibido no botão. */
    return <button onClick={() => resetGame()}>Novo Jogo</button>;
};
/* exportando o componente do botão para que ele possa ser importado e usado em outros módulos ou componentes. */
export default Button;