import Header from '../../components/Header/Header';


const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <Header />
            <div>
                <h2>Olá, (user)</h2>
                <p>08 agost 2024</p>
                <h3>Rastreie o progresso do projeto aqui. Você está quase alcançando um objetivo</h3>

                <ul>
                    <li className="infos-tasks">Finalizados</li>
                    <li className="infos-tasks">Progresso</li>
                    <li className="infos-tasks">Eficiencia</li>
                </ul>

                <div className="card-tempo">Tempo gasto dia corrente</div>
                <div className="card-tempo">Tempo gasto No mes corrente</div>


                <div>
                    <h4>Tarefas atuais</h4>
                    <p>progresso 30%</p>

                    <div>
                    todos
                    filtro por projeto/colaborador
                        <div className="cars-tarefas">
                            icone
                            texto
                            status
                            botao de inicio/pause
                            colaborador
                            tempo gasto (hoara de inicio, hora de fim)
                            icone de 3 pontos (excluir, editar, deletar, associar colaborador)
                        </div>
                        
                        <div className="cars-tarefas"></div>
                        <div className="cars-tarefas"></div>
                        <div className="cars-tarefas"></div>
                        <div className="cars-tarefas"></div>
                    </div>
                </div>
            </div>

            <div className="usuario">
                imagem
                nome
                <div>
                <p>Projetos</p>
                todos
                <div className="cards-projetos">
                    titulo do projeto
                    tasks do projeto
                </div>
                <div className="cards-projetos"></div>
                <div className="cards-projetos"></div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;