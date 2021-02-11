import React from 'react'
import Rating from './Rating';

const Product = () => {
    return (
      <div>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={props.data.imageUrl}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>{props.data.productName}</h5>
                {props.data.releasedData}
                <Rating
                rating={props.data.rating}
                numOfReviews={props.data.numOfReviews}
                />
            
            <p>{props.data.description}</p>
          </Media.Body>
        </Media>
      </div>
    );
}

export default Product;