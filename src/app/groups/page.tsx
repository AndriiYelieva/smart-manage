/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import style from '@/app/style/groups.module.scss';

import OrdersList from './OrdersList';
import ProductsList from './ProductsList';
import AddOrderInGroup from './AddOrderInGroup';
import AddProduct from './AddProduct';
import DeleteProduct from '../components/DeleteProduct';

export default function Groups() {
  const orders = useAppSelector(state => state.orders);

  const [orderId, setOrderId] = useState(0);
  const [productId, setProductId] = useState(0);
  const [showList, setShowList] = useState(false);
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);

  return (
    <>
      <section className="page position-relative overflow-hidden col-10 ps-5">
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
            <h1 className="m-0 ms-3">{`Groups / ${orders.length}`}</h1>
          </div>

          <section className="row">
            <ul className="h-75 col-4 content">
              {orders.map(order => <OrdersList
                key={order.id}
                order={order}
                setShowList={setShowList}
                orderId={orderId}
                setOrderId={setOrderId}
              />)}
            </ul>

            {showList && (
              <ProductsList
                setShowList={setShowList}
                orderId={orderId}
                setShowAddProduct={setShowAddProduct}
                setProductId={setProductId}
                setShowDeleteProduct={setShowDeleteProduct}
              />
            )}
          </section>

          {showAddOrder && (
            <AddOrderInGroup
              setShowAddOrder={setShowAddOrder}
            />
          )}

          {showAddProduct && (
            <AddProduct
              orderId={orderId}
              setShowAddProduct={setShowAddProduct}
            />
          )}
          {showDeleteProduct && (
            <DeleteProduct
              productId={productId}
              setShowDeleteProduct={setShowDeleteProduct}
            />
          )}
        </div>
      </section >

      <style>{`
          .page {
            background: #F2F2FF;
          }
          .cart {
            height: 70px;
            margin-bottom: 12px !important;
          }
          .cart:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3) !important;
          }
          .content {
            max-height: 500px;
            overflow: auto;
          }
        `}</style>
    </>
  )
};

