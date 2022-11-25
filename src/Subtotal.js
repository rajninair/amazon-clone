import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';

import './subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />
                            This order contains a gift
                        </small>

                        {/* {value} */}

                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rs.'}
            />

            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal