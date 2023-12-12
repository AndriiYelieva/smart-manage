"use client"
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks';

import style from '@/app/style/addProduct.module.scss';
import * as productAction from '@/redux/features/productSlice';
import { SortByType } from '@/Type/SortByType';
import { SortBySpecification } from '@/Type/SortBySpecification';

type Props = {
  setShowAddProduct: (v: boolean) => void;
  orderId: number;
}

const AddProduct: React.FC<Props> = ({ setShowAddProduct, orderId }) => {
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputPhoto, setInputPhoto] = useState('');
  const [inputUSD, setInputUSD] = useState('');
  const [inputUAH, setInputUAH] = useState('');
  const [typeProduct, setTypeProduct] = useState('none');
  const [specificationProduct, setSpecificationProduct] = useState('none');
  const [guaranteeStart, setGuaranteeStart] = useState('');
  const [guaranteeEnd, setGuaranteeEnd] = useState('');

  const dispatch = useAppDispatch();
  const validForm = !!inputTitle.trim() && !!inputUSD.trim()
    && !!inputPhoto.trim() && !!inputUAH.trim() && typeProduct  !== 'none'
    && specificationProduct !== 'none' && !!guaranteeStart && !!guaranteeEnd

  const formattedDate = () => {
    return new Date().toLocaleString('en-GB', { timeZone: 'Europe/Kiev' })
      .replace(/(\d+)\/(\d+)\/(\d+),/, '$3-$2-$1')
      .replace(/,/, '')
  };

  // console.log('specificationProduct', specificationProduct);
  // console.log('typeProduct', guaranteeStart);
  console.log('guaranteeStart', guaranteeStart);
  console.log('guaranteeEnd.length', guaranteeEnd.length);



  //sectoin handly
  const handleName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputName(value);
  };

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setInputTitle(value);
  };

  const handleTypeProduct: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    setTypeProduct(value);
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

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setTypeProduct(selectedValue)
  };

  const handleChangeSpecification = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setSpecificationProduct(selectedValue)
  };

  const handleChangeGuaranteeStart = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = event.target.value;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    // console.log(inputDate.toString());

    if (dateRegex.test(inputDate)) {
      setGuaranteeStart(inputDate);
    } else {
      console.error('Incorrect date format');
    }
  };

  const handleChangeGuaranteeEnd = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = event.target.value;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateRegex.test(inputDate)) {
      setGuaranteeEnd(inputDate);
    } else {
      console.error('Incorrect date format');
    }
  };


  const createOrder = () => {
    const product = {
      id: Math.floor(Math.random() * 1000),
      name: '',
      serialNumber: Math.floor(Math.random() * 1000),
      photo: '',
      title: '',
      type: '',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 190, symbol: 'USD', },
        { value: 3200, symbol: 'UAH', }
      ],
      order: 0,
      date: '',
      specification: '',
    };

    product.name = inputName;
    product.photo = inputPhoto;
    product.title = inputTitle;
    product.type = typeProduct;
    product.guarantee.start = guaranteeStart.toString();
    product.guarantee.end = guaranteeEnd.toString();
    product.price[0].value = +inputUSD;
    product.price[1].value = +inputUAH;
    product.order = orderId
    product.date = formattedDate();
    product.specification = specificationProduct;

    dispatch(productAction.addProduct(product))
    setShowAddProduct(false);
  };

  return (
    <>
      <div className="position-absolute add d-flex h-100 w-100 justify-content-center align-items-center ">
        <div className="notification position-relative w-50">
          <div className={style.add__title}>
            <div className="row m-2">
              <label htmlFor="name" className="col-4">Set name:
                <input
                  value={inputName}
                  onChange={handleName}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                />
              </label>
              <label htmlFor="title" className="col-4">Set title:
                <input
                  value={inputTitle}
                  onChange={handleTitle}
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  id="title"
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
              <label htmlFor="type" className="col-4 my-4">Set type:
                <select
                  value={typeProduct}
                  onChange={handleChangeType}
                  className="form-control"
                  data-cy="paginationLeft"
                >
                  <option defaultValue="default" disabled >none</option>
                  <option value={SortByType.MOTHERBOARD}>{SortByType.MOTHERBOARD}</option>
                  <option value={SortByType.GRAPHIC_CARD}>{SortByType.GRAPHIC_CARD}</option>
                  <option value={SortByType.MONITORS}>{SortByType.MONITORS}</option>
                </select>
              </label>
              <label htmlFor="USD" className="col-4 my-4">Price USD:
                <input
                  value={inputUSD}
                  onChange={handleUSD}
                  type="number"
                  className="form-control"
                  placeholder="USD"
                  id="USD"
                />
              </label>
              <label htmlFor="UAH" className="col-4 my-4">Price UAH:
                <input
                  value={inputUAH}
                  onChange={handleUAH}
                  type="number"
                  className="form-control"
                  placeholder="UAH"
                  id="UAH"
                />
              </label>
              <label htmlFor="Specification" className="col-4">Specification:
                <select
                  value={specificationProduct}
                  onChange={handleChangeSpecification}
                  className="form-control"
                  id="Specification"
                >
                  <option defaultValue="default" disabled >none</option>
                  <option value={SortBySpecification.NEW}>{SortBySpecification.NEW}</option>
                  <option value={SortBySpecification.USED}>{SortBySpecification.USED}</option>
                </select>
              </label>
              <label htmlFor="GuaranteeStart" className="col-4">Guarantee start:
                <input
                  value={guaranteeStart}
                  onChange={handleChangeGuaranteeStart}
                  type="date"
                  className="form-control"
                  id="GuaranteeStart"
                />
              </label>
              <label htmlFor="GuaranteeEnd" className="col-4">Guarantee end:
                <input
                  value={guaranteeEnd}
                  onChange={handleChangeGuaranteeEnd}
                  type="date"
                  className="form-control"
                  id="GuaranteeEnd"
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

function moment(timeStamp: any) {
  throw new Error('Function not implemented.');
}
