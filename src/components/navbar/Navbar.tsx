import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Navbar() {
 
  

  return (
    <>
     <div className='bg-blue-300 font-bold text-black flex justify-center py-4'>
     <div className="container flex justify-between text-lg">
            <div>
            <img src={logo} alt="" className='App-logo' />
            </div>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/sobrenos' className='hover:underline'>Sobre Nós</Link>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <Link to='/contato' className='hover:underline'>Contato</Link>
              <Link to='/login' className='hover:underline'>Login</Link>
            </div>
          </div>
          </div>
    </>
  )
}

export default Navbar