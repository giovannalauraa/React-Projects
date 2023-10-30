import './Menu.css'
import { Link } from 'react-router-dom'

// Componente que retorna o menu com rotas
const Menu = props => (
    <>
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/pokedex">Pokédex</Link>
                    </li>
                    <li>
                        <Link to="/jogo">Jogo da Velha</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    </>
)

export default Menu