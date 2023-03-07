import React, { useState } from 'react';
import './App.css';

function BeerCard(props) {
  const { image_url, name, first_brewed, tagline, abv, description } = props;
  const [isHidden, setHide] = useState(true);

  return (
    <div className='container'>
      <div className='imgBox'>
        <img className='img' src={image_url} alt='img' />
      </div>
      <div className='info'>
          <h3 >{name} <span>{first_brewed}</span></h3> 
          <h4>{tagline}</h4>
          <p><span>{abv}</span>{description}</p>  
      </div>
    </div>
  )
};

export default BeerCard;