import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Order from "./Order.js";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (user) {
      if (isMounted) {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .orderBy("created", "desc")
          .onSnapshot((snapshot) =>
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          );
      }
    } else {
      setOrders([]);
    }

    return () => {
      isMounted = false;
    };
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
