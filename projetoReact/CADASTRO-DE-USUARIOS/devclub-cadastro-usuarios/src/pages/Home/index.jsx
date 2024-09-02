import './style.css'
import Trash from '../../assets/Trash.svg'

function Home() {


  const users = [{
    id: '2342asda',
    name: 'Matheus',
    age: 23,
    email: 'matheus@email.com'

  },
  {
    id: '4324fjdfjds',
    name: 'Jorge',
    age: 43,
    email: 'jorge@email.com'

  }
 ]


  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input idade='idade' type='number' />
        <input email='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      <div>
          <p>Nome: </p>
          <p>Idade: </p>
          <p>Email: </p>
      </div>
      <button>
        <img src={Trash}/>
      </button>

    </div>


  )
}

export default Home
