import React, { useEffect, useState } from 'react';

const Card = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 600); 
  }, []);

  return (
    <div className={`custom-card Cardsize ${isLoaded ? 'loaded' : ''}`}>
      <p className="icons text-center golden-text">{props.imgSrc}</p>
      <div className="card-body ">
        <h5 className="card-title cardData text-center ">{props.title} :</h5>
        <p className="card-text cardData">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
