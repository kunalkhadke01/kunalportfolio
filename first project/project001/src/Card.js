import React from 'react';


const Card = ({name,email,id}) => {
    return (
         <div className='bg-light-yellow dib br3 pd3 ma2 grow bw2 shadow-5'>
            <img src={"https://robohash.org/$(id)?100*100"} alt="robot" />
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;