'use client'
import { useState } from 'react';
import style from '@/app/style/orders.module.scss';

import CartOrders from './CartOrders';
import { useAppSelector } from '@/redux/hooks';
import DeleteOrder from './DeleteOrder';
import { Order } from '@/Type/Order';
import AddOrder from './AddOrder';


export default function Parish() {
  const orders = useAppSelector(state => state.orders);

  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [orderDelete, setOrderDelete] = useState<Order>(orders[0]);
  return (
    <>
      <div className="container position-relative">
        <div className={style.content}>
          <div className="dropdowns ps-4 mt-5 mb-3 d-flex align-items-center">
            <div className={style.wrapper}>
              <button
                type="button"
                className={style.button}
                onClick={() => setShowAddOrder(true)}
              >
                +
              </button>
            </div>
            <h1 className="m-0 ms-3">Orders</h1>
          </div>

          <section className="row list">
            <ul className="h-75 col-12 ps-5">
              {orders.map(order => <CartOrders
                key={order.id}
                setShowDeleteMessage={setShowDeleteMessage}
                order={order}
                setOrderDelete={setOrderDelete}
              />)}
            </ul>
            {showDeleteMessage && (
              <DeleteOrder
                orderDelete={orderDelete}
                setShowDeleteMessage={setShowDeleteMessage}
              />
            )}
            {showAddOrder && (
              <AddOrder
                setShowAddOrder={setShowAddOrder}
              />
            )}
          </section>
        </div>
      </div >

      <style>{`
          .cart {
            height: 70px;
            margin-bottom: 12px !important;
          }
          .cart:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3) !important;
          }
          .list {
            max-height: 500px;
            overflow: auto;
          }
        `}</style>
    </>
  )
};

