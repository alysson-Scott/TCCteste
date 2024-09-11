import React from "react";

const Cards = (props) =>{
    return(
       
          <div className="w-[300px] pt-4 mx-4 my-4 border-2 border-black rounded-lg  overflow-hidden">
        <div className="h-full  border-opacity-60 ">
          <img className="lg:h-48 md:h-36 w-full pl-[20px] pb-4 object-cover object-center bg-white" src={props.img} alt="blog"></img>
          <div className="pb-4 pt-3 pl-2  bg-black">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange">{props.nome}</h2>
            <h1 className="title-font text-lg font-medium text-orange ">{props.desc}</h1>
            <p className="leading-relaxed mb-3">{props.sub}</p>
          </div>
        </div>
          </div>
    )
}

export default Cards;