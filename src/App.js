import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from "./Login";
import Orders from "./Orders";
import Payment from './Payment';
import { useStateValue } from './StateProvider';

// pk_test_NGAuBuHJ7ZJl6vhZJFtFf6dz
const promise = loadStripe('pk_test_NGAuBuHJ7ZJl6vhZJFtFf6dz')

function App() {

  const [{ }, despatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        despatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        despatch({
          type: 'SET_USER',
          user: null
        })
      }

    })

    return () => {
      console.log('cleanup')
    }
  }, [])

  //  video stopped at 4.10.12


  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>

          <Route path="/login" element={<Login />} />


          <Route path="/orders" element={<Orders />} />

          <Route exact path="/checkout" element={<Checkout />} />

          <Route exact path="/" element={<Home />} />


          <Route exact path="/payment" element={<Elements stripe={promise}  ><Payment /></Elements>} />



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
