import React from "react";

const Button = (props) =>{
    return(
        <button className="bg-orange text-white py-2 px-4 mr-4 rounded md:ml-3 md:mr-0  hover:bg-white hover:text-orange duration-500">
            {props.children}
        </button>
    )
}

export default Button