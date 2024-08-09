import './_header.scss';

const Header = () =>{
    return(
        <div className="container-header">
            <ul>
                <li className="menus">Home</li>
                <li className="menus">Projetos</li>
                <li className="menus">Tasks</li>
            </ul>

            <button>Criar nova Task</button>
            <button>Criar novo Projeto</button>

            <button>Sair</button>
        </div>
    )
}

export default Header;