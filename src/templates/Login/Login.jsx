import React from 'react'
import './Login.css'
import Maromba from '../../assets/home2.jpg'

const Login = () => {
  return (
       <div className='w-full h-full flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
          <div className='absolute-top-[20%] left-[10%] flex flex-col'>
            <h1 className='text-2xl text-black font-bold my-4'>Nutrindo hoje os atletas de amanhã</h1>
            <p className='text-4xl text-black font-normal'>Nós garantimos os melhores suplementos para a melhor performance</p>
          </div>
          <img src={Maromba} id='Maromba'/>
        </div>
 
         <div className='w-1/2 h-full bg-black flex flex-col'>

        </div>
       </div>
  )
}

export default Login
