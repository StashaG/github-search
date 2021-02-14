import React from 'react'
import Product from './Product';

function Products() {

    const getProducts = () => {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2020",
                description: "Jelly beans soufflé gummies apple pie ice cream tiramisu gummi bears cupcake candy. Pastry icing topping marzipan soufflé.",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "June 01, 2020",
                description: "Tootsie roll bonbon cotton candy dessert icing carrot cake halvah gummi bears jelly beans.",
                rating: 2,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 04, 2020",
                description: "Croissant chocolate cake jujubes danish jelly beans brownie bear claw donut wafer.",
                rating: 5,
                numOfReviews: 2
            }];
    }

    return (
        <div>
            
        </div>
    )
}

export default Products
