import React from 'react';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>

            {/* Checkout left */}
            <div className="checkout__left">
                <img className="checkout__ad" src="https://picsum.photos/500/100" alt="product" />
                <div>
                    <h3>Hello, {user && user.email} </h3>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>


                    {/* <CheckoutProduct
                        id='1111'
                        title='my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 '
                        image='https://picsum.photos/230/230'
                        price={111}
                        rating={3}
                    /> */}



                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}
                    {/* <BasketItem /> */}


                </div>

            </div>

            {/* Checkout right */}
            <div className="checkout__right">
                <Subtotal />
            </div>



        </div>
    )
}

export default Checkout