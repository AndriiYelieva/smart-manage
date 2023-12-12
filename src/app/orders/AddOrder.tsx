import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks';
import * as ordersAction from '@/redux/features/orderSlice';

import style from '@/app/style/addOreder.module.scss';

type Props = {
  setShowAddOrder: (v: boolean) => void,
}

const AddOrder: React.FC<Props> = ({
  setShowAddOrder,
}) => {
  const [inputName, setInputName] = useState('');
  const dispatch = useAppDispatch();

  const formattedDate = () => {
    return new Date().toLocaleString('en-GB', { timeZone: 'Europe/Kiev' })
    .replace(/(\d+)\/(\d+)\/(\d+),/, '$3-$2-$1')
    .replace(/,/, '')
  };

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputName(value);
  };

  const createOrder = () => {
    const order = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      date: '',
      description: inputName,
    };

    order.title = `Order ${order.id}`;
    order.date = formattedDate();
    dispatch(ordersAction.addOrder(order));
    setShowAddOrder(false);
  };

  return (
    <>
      <div className="position-absolute add d-flex h-100 w-100 justify-content-center align-items-center ">
        <div className="notification position-relative w-25">
          <div className={style.add__title}>
            <div className="form-group align-items-center m-2">
              <label htmlFor="formGroupExampleInput" className="m-2">Create a new order:</label>
              <input
                onChange={handleInput}
                value={inputName}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Order name"
              />
            </div>
          </div>
          <div className={style.add__buttons}>
            <button
              className={style.add__cancel}
              type="button"
              onClick={() => setShowAddOrder(false)}>
              CANCEL
            </button>
            <button
              className={style.add__add}
              type="button"
              onClick={() => createOrder()}
              disabled={inputName.length < 4}
            >
              ADD
            </button>
          </div>
          <button
            className={style.add__close}
            type="button"
            onClick={() => {
              setShowAddOrder(false)
            }}>
            X
          </button>
        </div>
      </div>

      <style>{`
      .add {
        left: 0;
        top: 0;
        background-color: rgba(134, 134, 134, 0.6);
      }
      `}
      </style>
    </>
  )
}

export default AddOrder;