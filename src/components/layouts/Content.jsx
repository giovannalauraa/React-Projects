// importando o react router para configurar as rotas
import { Routes, Route } from 'react-router-dom'

// Importando as páginas para configurar as rotas
import NotFound from '../../pages/NotFound'
import TicTacToe from '../TicTacToe/TicTacToe'
import PaginaPokedex from '../../components/Pokedex/pages/PaginaPokedex'

// Rotas configuradas para o menu 
const Content = props => (
    <>
        <aside className="Content">
            <Routes>
                <Route path="/pokedex" element={<PaginaPokedex />} />
                <Route path="/jogo" element={<TicTacToe />} />
                <Route path="/" element={<PaginaPokedex />} />
                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </aside>
    </>
)

export default Content