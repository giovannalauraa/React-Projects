// Feito por: Giovanna Laura Cravo e Silva -- BP3039391
// API utilizada: https://pokeapi.co/

import './App.css'
import Menu from './components/layouts/Menu'
import Content from './components/layouts/Content'
import { BrowserRouter } from 'react-router-dom'

// Aplicação principal aonde importa as rotas configuradas em um
// menu e os seus conteúdos correspondentes ao serem selecionadas
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Menu/>
          <Content/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App



