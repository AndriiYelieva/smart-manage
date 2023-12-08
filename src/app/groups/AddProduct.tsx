"use client"
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks';
import style from '@/app/style/addProduct.module.scss';
import * as productAction from '@/redux/features/productSlice';

type Props = {
  setShowAddProduct: (v: boolean) => void;
  orderId: number;
}

const AddProduct: React.FC<Props> = ({ setShowAddProduct, orderId }) => {
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputPhoto, setInputPhoto] = useState('');
  const [inputUSD, setInputUSD] = useState('');
  const [inputUAH, setInputUAH] = useState('');
  const dispatch = useAppDispatch();
  const validForm = !!inputName.trim() && !!inputTitle.trim() && !!inputType
    && !!inputUSD.trim() && !!inputPhoto.trim() && !!inputUAH.trim()

  const formattedDate = () => {
    return new Date().toLocaleString('en-GB', { timeZone: 'Europe/Kiev' })
      .replace(/(\d+)\/(\d+)\/(\d+),/, '$3-$2-$1')
      .replace(/,/, '')
  };

  // sectoin handly
  const handleName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputName(value);
  };

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputTitle(value);
  };

  const handleType: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputType(value);
  };

  const handlePhoto: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputPhoto(value);
  };

  const handleUSD: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputUSD(value);
  };

  const handleUAH: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputUAH(value);
  };

  const createOrder = () => {
    const product = {
      id: Math.floor(Math.random() * 1000),
      name: '',
      serialNumber: Math.floor(Math.random() * 1000),
      photo: '',
      title: '',
      type: '',
      price: [
        { value: 190, symbol: 'USD', },
        { value: 3200, symbol: 'UAH', }
      ],
      order: 0,
      date: ''
    };

    product.name = inputName;
    product.title = inputTitle;
    product.type = inputType;
    product.photo = inputPhoto;
    product.price[0].value = +inputUSD;
    product.price[1].value = +inputUAH;
    product.order = orderId
    product.date = formattedDate();

    dispatch(productAction.addProduct(product))
    setShowAddProduct(false);
  };

  return (
    <>
      <div className="position-absolute add d-flex h-100 w-100 justify-content-center align-items-center ">
        <div className="notification position-relative w-50">
          <div className={style.add__title}>
            <div className="row m-2">
              <label htmlFor="name" className="col-4 mb-4">Set name:
                <input
                  value={inputName}
                  onChange={handleName}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                />
              </label>
              <label htmlFor="title" className="col-4 mb-4">Set title:
                <input
                  value={inputTitle}
                  onChange={handleTitle}
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  id="title"
                />
              </label>
              <label htmlFor="type" className="col-4 mb-4">Set type:
                <input
                  value={inputType}
                  onChange={handleType}
                  type="type"
                  className="form-control"
                  placeholder="Type"
                  id="type"
                />
              </label>
              <label htmlFor="photo" className="col-4">Set photo:
                <input
                  value={inputPhoto}
                  onChange={handlePhoto}
                  type="text"
                  className="form-control"
                  placeholder="Photo"
                  id="photo"
                />
              </label>
              <label htmlFor="USD" className="col-4">Price USD:
                <input
                  value={inputUSD}
                  onChange={handleUSD}
                  type="text"
                  className="form-control"
                  placeholder="USD"
                  id="USD"
                />
              </label>
              <label htmlFor="UAH" className="col-4">Price UAH:
                <input
                  value={inputUAH}
                  onChange={handleUAH}
                  type="type"
                  className="form-control"
                  placeholder="UAH"
                  id="UAH"
                />
              </label>
            </div>
          </div>
          <div className={style.add__buttons}>
            <button
              className={style.add__cancel}
              type="button"
              onClick={() => setShowAddProduct(false)}>
              CANCEL
            </button>
            <button
              className={style.add__add}
              type="button"
              onClick={() => createOrder()}
              disabled={!validForm}
            >
              ADD
            </button>
          </div>
          <button
            className={style.add__close}
            type="button"
            onClick={() => {
              setShowAddProduct(false)
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
};

export default AddProduct;