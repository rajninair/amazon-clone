import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from './StateProvider';

import './header.css';

import amazonLogo from './assets/amazon.png';
import { auth } from './firebase';


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();


    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img src={amazonLogo} className="header__logo" alt="Amazon logo" />
            </Link>
            <div className="header__search">
                <input type="text" className='header__searchInput' /><span className='header__searchIcon'>&#128269;</span>
                {/* img */}
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email} </span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>


                <Link to='/checkout' className='link'>
                    <div className="header__optionBasket">
                        {/* <ShoppingBasketItem /> */} <span className='header__basketIcon'>&#128722;</span>
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>



            </div>



        </div>
    )
}

export default Header