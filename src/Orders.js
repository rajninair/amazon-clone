import { map } from "@firebase/util";
import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { db } from "./firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./orders.css";
const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // db.collection("users")
      // .doc(user?.uid)
      // .collection('orders')
      // .orderBy('created', 'desc')
      // .onSnapshot(shapshot => (
      //   setOrders(snapshot.docs.map(doc => ({
      //     id: doc.id,
      //     data: doc.data()
      //   })))
      // ));
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your orders</h1>

      <div className="orders__order">
        {/* FIXME: to do */}
        {/* TODO: to do */}
        {/* TODO: remove later */}
        <CheckoutProduct
          id="1111"
          title="my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 "
          image="https://picsum.photos/230/230"
          price={111}
          rating={3}
        />

        <CheckoutProduct
          id="1111"
          title="my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 "
          image="https://picsum.photos/230/230"
          price={111}
          rating={3}
        />

        <CheckoutProduct
          id="1111"
          title="my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 my product 1111 "
          image="https://picsum.photos/230/230"
          price={111}
          rating={3}
        />

        {/* TODO: remove later */}

        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
