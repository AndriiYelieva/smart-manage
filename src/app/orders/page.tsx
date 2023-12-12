'use client'
import { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';

import CartOrders from './CartOrders';
import DeleteOrder from './DeleteOrder';
import AddOrder from './AddOrder';
import { Order } from '@/Type/Order';

import style from '@/app/style/orders.module.scss';

export default function Parish() {
  const orders = useAppSelector(state => state.orders);

  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [orderDelete, setOrderDelete] = useState<Order>(orders[0]);
  return (
    <>
      <section className="position-relative col-10 ps-5">
        <div className={style.content}>
          <div className="dropdowns my-5 d-flex align-items-center">
            <div className={style.wrapper}>
              <button
                type="button"
                className={style.button}
                onClick={() => setShowAddOrder(true)}
              >
                +
              </button>
            </div>
            <h1 className="m-0 ms-3">{`Orders / ${orders.length}`}</h1>
          </div>

          <section className="row list">
            <ul className="h-75 col-12">
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
      </section >

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

