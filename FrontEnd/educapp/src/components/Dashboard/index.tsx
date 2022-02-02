const Dashboard = () => {
  const perfil = 'Aluno'
  const perfilAluno = (
    <>
      <div>
        <h1>Próximas aulas</h1>
        <div>
          <div>
            <h1>Luis</h1>
            <p>horário da aula</p>
            <a href="">Acessar aula</a>
          </div>
        </div>
      </div>
      <div>
        <h1>Marcar Outra Aula</h1>
      </div>
    </>
  )
  const perfilProfessor = (
    <>
      <div>
        <h1>Próximas aulas</h1>
        <div>
          <div>
            <h1>Luis</h1>
            <p>horário da aula</p>
            <a href="">Acessar aula</a>
          </div>
        </div>
      </div>
      <div>
        <h1>Pedidos de aulas</h1>
        <div>
          <h1>Cálculo 2</h1>
          <p> nome Professor </p>
          <p> horário da aula </p>
          <a href="">Aceitar Aula</a>
        </div>
      </div>
    </>
  )
  return perfil === 'Aluno' ? perfilAluno : perfilProfessor
}

export default Dashboard
