// 1. Import React
import React from 'react';

// 2. Declare the component as a function
const Card = (props) => {

    const cardStyle = {
        "width": "300px",
        "border-style": "solid"
    }
    
    return (
        <div className="card" style={cardStyle}>
          <img src={props.cardImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            
          </div>
        </div>
    )
}

// 3. Export the component
export default Card;