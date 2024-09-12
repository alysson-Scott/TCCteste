import React from 'react'
import './Suplemento.css'
import Cards from "../../Components/Cards/Cards"
import Produto from "../../assets/suplemento-1.png"




const Suplemento = () => {  
  return (
    <div className='flex flex-col'>
    <>
    <Cards img={Produto} nome="Produto" desc="Este suplemento é o melhor do mercado" sub="fasdhfgahgfjgakjgk"/>
    </>
    </div>
    
    
  );
};


export default Suplemento
