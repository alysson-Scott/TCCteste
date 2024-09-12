import React from 'react'
import './Login.css'
import Maromba from '../../assets/home2.jpg'
import Logo from '../../assets/KitFit.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
       <div className='w-full h-screen flex items-start bg-[#000000] justify-center sm:'> 
         <div className='w-1/2 h-full bg-[#000000] flex flex-col p-10 justify-around items-center '>
          <img src={Logo} className='w-1/2 h-1/4  min-w-[300px] min-h-[200px]' />

          <div className='w-full flex flex-col min-h-[300px] max-h-[400px] min-w-[300px] max-w-[400px]'>
            <div className='w-full flex flex-col mb-5'>
              <h3 className='text-3xl font-semibold mb-2 text-[#ffffff]'>Login</h3>
              <p className='text-[#ffffff] text-base '>Bem-vindo devolta, insira suas credenciais!</p>
              </div>

              <div className='w-full flex flex-col'>
                <input className='w-full text-[#ffffff] my-2 py-2 border-b border-[#ffffff] outline-none focus:outline-none bg-[#000000]' type="email" placeholder='Email' />
                <input className='w-full text-[#ffffff] my-2 py-2 border-b border-[#ffffff] outline-none focus:outline-none bg-[#000000]' type="password" placeholder='Senha' /> 
              </div>

              <div className='w-full flex items-center justify-between'>
                <div className='w-full flex items-center'>
                  <input type="checkbox" className='w-4 h-4 mr-2'/>
                  <p className='text-sm text-[#ffffff]'>Lembre-se de mim</p>
                </div>
                <Link to={"/forgotpass"}><p className='text-sm font-medium whitespace-nowrap cursor-pointer text-[#ffffff]'>Esqueceu a senha?</p></Link>
              </div>
              <div className='w-full flex flex-col my-4'>
              <button className='w-full bg-[#F36D04] font-bold rounded-md my-2 p-4 text-center flex items-center justify-center cursor-pointer'>
                Entrar
              </button>
              </div>
          </div>
          <div className='w-screen flex items-center justify-center bg-[#000000]  '>
          <p className='text-[#ffffff] text-sn font-normal'>Não tem uma conta? <Link to={"/register"}><span className='font-semibold text-[#ffffff] cursor-pointer'>Cadastre-se aqui!</span></Link> </p>
          </div>

        </div>
       </div>
  )
}

export default Login
