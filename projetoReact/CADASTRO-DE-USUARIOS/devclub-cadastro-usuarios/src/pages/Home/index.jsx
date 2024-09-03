import './style.css'
import Trash from '../../assets/Trash.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

//codigo js
function Home() {
  const [users, setUsers] = useState([]) //useStates auxilia com que as informações altere na tela.
  //Users: responsavel por onde vai estar os dados //setUsers é responsavel por colocar os dados 

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }
  async function createUsers() {

    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }

  useEffect(() => { //tudo que estiver aqui dentro, vai executar quando a aplicação abrir
    getUsers()
  }, [])

  //codigo html
  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' ref={inputName} />
        <input placeholder="idade" name='idade' type='number' ref={inputAge} />
        <input placeholder="E-mail" name='email' type='email' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
         
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash}/> 
          </button>
        </div>
      //se a função precisa de parametro é preciso usar o () => como no ex acima
      //o user é por conta das informações que chegam no map
      ))}
    </div>
  )
}

export default Home
