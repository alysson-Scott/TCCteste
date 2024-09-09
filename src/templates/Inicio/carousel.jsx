import React, {useState} from "react";

const Carousel = () =>{
    
    const slides = [
        {
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-gratis%2Fhalteres-no-chao-de-uma-academia-ai-generative_41368279.htm&psig=AOvVaw2o-JIfwTccUKCd_bvcNxvK&ust=1725448737345000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCis-XTpogDFQAAAAAdAAAAABAE"
        },
        {
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pontotel.com.br%2Fauxilio-academia%2F&psig=AOvVaw2o-JIfwTccUKCd_bvcNxvK&ust=1725448737345000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCis-XTpogDFQAAAAAdAAAAABAJ"
        },
    ];

    return(
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
            <div style={{backgroundImage: `url(${slides[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">

            </div>
        </div>
    )
}

export default Carousel