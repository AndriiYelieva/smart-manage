import { useAppDispatch } from '@/redux/hooks';
import * as ordersAction from '@/redux/features/orderSlice';
import { Order } from '@/Type/Order';

import style from '@/app/style/deleteOrder.module.scss';

type Props = {
  orderDelete: Order;
  setShowDeleteMessage: (v: boolean) => void,
}

const DeleteOrder: React.FC<Props> = ({
  orderDelete,
  setShowDeleteMessage
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="position-absolute section d-flex h-100 w-100 justify-content-center align-items-center ">
        <div className="notification position-relative w-50">
          <div className={style.delete__title}>
            <h4 className="m-4">
            {`Are you sure you want to delete <${orderDelete.description}>`}?
            </h4>
          </div>
          <div className={style.delete__buttons}>
            <button
              className={style.delete__cancel}
              type="button"
              onClick={() => setShowDeleteMessage(false)}>
              CANCEL
            </button>
            <button
              className={style.delete__delete}
              type="button"
              onClick={() => {
                dispatch(ordersAction.removeOrder(orderDelete));
                setShowDeleteMessage(false)
              }}>
              <div className={style.delete__icon} />
              DELETE
            </button>
          </div>
          <button
            className={style.delete__close}
            type="button"
            onClick={() => {
              setShowDeleteMessage(false)
            }}>
            X
          </button>
        </div>
      </div>

      <style>{`
      .section {
        left: 0;
        top: 0;
        background-color: rgba(134, 134, 134, 0.6);
      }
      `}
      </style>
    </>
  )
}

export default DeleteOrder;