import React, { useState } from 'react';

const imgStyle = {
  height: "200px",
  padding: "10px"
}

function BeerCard(props) {
  const { image_url, name, first_brewed, tagline, abv, description } = props;
  const [isHidden, setHide] = useState(true);

  return (
    <div >
        <img style={ imgStyle } src={image_url} alt='img' />
          <h3 >{name} <span>{first_brewed}</span></h3> 
          <h4>{tagline}</h4>
          <p><span>{abv}</span>{description}</p>  
    </div>
  )
};

export default BeerCard;