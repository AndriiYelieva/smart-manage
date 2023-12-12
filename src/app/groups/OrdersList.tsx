import { useAppSelector } from "@/redux/hooks";
import { Order } from "@/Type/Order";

import style from "@/app/style/carts.module.scss";

type Props = {
  setShowList: (v: boolean) => void,
  setOrderId: (v: number) => void,
  orderId: number
  order: Order;
}

const OrdersList: React.FC<Props> = ({ setShowList, order, orderId, setOrderId }) => {
  const products = useAppSelector(state => state.products);
  const lengthProducts = products.filter(product => product.order === order.id).length;

  return (
    <>
      <button
        className={style.button}
        type="button"
        onClick={() => {
          setShowList(true)
          setOrderId(order.id)
        }}
      >
        <li className="d-flex row border border-secondary rounded align-items-center cart bg-white">
          <div className="p-0 d-flex justify-content-center col-2">
            <button className={style.cart__list}>
            </button>
          </div>

          <div className="col-2">
            <h4 className="m-0">{lengthProducts}</h4>
            <p className="m-0">Products</p>
          </div>
          <div className="text-center col-6">
            <p className="m-0 mx-auto">{order.date}</p>
          </div>

          {orderId === order.id && (
            <div className="col-2 d-flex justify-content-end h-100 p-0" >
              <div className={style.arrow}></div>
            </div>
          )}
        </li>
      </button>
    </>
  )
}

export default OrdersList;