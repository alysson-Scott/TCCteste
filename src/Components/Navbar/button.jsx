import React from "react";

const Button = (props) =>{
    return(
        <button className="bg-orange text-white py-2 px-4 rounded md:ml-8  hover:bg-white hover:text-orange duration-500 mr-4">
            {props.children}
        </button>
    )
}

export default Button