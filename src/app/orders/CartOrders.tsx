"use client"
import style from '@/app/style/carts.module.scss';
import { useAppSelector } from '@/redux/hooks';
import { Order } from '@/Type/Order';
import { useMemo } from 'react';

type Props = {
  order: Order;
  setShowDeleteMessage: (v: boolean) => void;
  setOrderDelete: (v: Order) => void;
}

const CartOrders: React.FC<Props> = ({
  order,
  setShowDeleteMessage,
  setOrderDelete,
}) => {
  const products = useAppSelector(state => state.products)
  const localProducts = products.filter(product => product.order === order.id)
  const sumUSD = useMemo(() => localProducts.reduce((accumulator, currenrValue) => accumulator + currenrValue.price[0].value, 0),
    [localProducts]);
  const sumUAH = useMemo(() => localProducts.reduce((accumulator, currenrValue) => accumulator + currenrValue.price[1].value, 0),
    [localProducts]);
  const lengthProducts = localProducts.length;

  return (
    <>
      <li className="row border border-secondary rounded align-items-center cart">
        <h2 className="col-6 text-decoration-underline">{order.description}</h2>

        <div className="col-1 m-auto d-flex justify-content-center align-items-center">
          <button className={style.cart__list}>
          </button>
        </div>

        <div className="info-parish col-1">
          <h4 className="m-0">{lengthProducts}</h4>
          <p className="m-0">Products</p>
        </div>
        <div className="add-product col-2 text-center">
          <p className="m-0 mx-auto d-inline-block">{order.date}</p>
        </div>
        <div className="col-1">
          <p className="m-0">{`${sumUSD}$`}</p>
          <p className="m-0">{`${sumUAH}UAH`}</p>
        </div>

        <div className="col-1 p-0 m-auto d-flex justify-content-center ">
          <button
            className={style.cart__trash}
            onClick={() => {
              setOrderDelete(order)
              setShowDeleteMessage(true)
            }}
          />
        </div>
      </li>
    </>
  )
}

export default CartOrders;