import React from "react";

const Cards = (props) =>{
    return(
       
          <div className="bg-grey-100 w-full min-h-screen gap-6 flex flex-wrap-reverse justify-center items-center ">
              <div className="w-60 p-2 bg-white rounded-xl transform transition transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-lg mt-4 mb-4 lg:mt-0">
              <img src={props.img} className="h-40 w-full object-cover rounded-xl" alt="" />
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2">{props.nome}</h2>
                <span className="text-xl font-semibold">R$1800</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through opacity-75">R$2900</span>
                  <span className="font-bold text-sm p-2 bg-orange rounded-s-2xl text-white">Desconto</span>
                </div>
                <div className="flex items-center mt-2 gap-1"> 

                </div>
                <p className="text-sm text-gray-600 mt-2 mb-2 justify-center align-center ">{props.desc}</p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <button className="px-3 py-3 rounded-lg bg-orange hover:bg-black text-white font-semibold">Veja mais!</button>
              </div>
              </div>
          </div>
    )
}

export default Cards;