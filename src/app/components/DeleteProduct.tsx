/* eslint-disable @next/next/no-img-element */
import style from '@/app/style/deleteProduct.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import * as productAction from '@/redux/features/productSlice';

type Props = {
  productId: number;
  setShowDeleteProduct: (v: boolean) => void,
}

const DeleteProduct: React.FC<Props> = ({
  productId,
  setShowDeleteProduct
}) => {
  const products = useAppSelector(state => state.products);
  const currentProduct = products.filter(product => product.id === productId);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="position-absolute section d-flex h-100 w-100 justify-content-center align-items-center ">
        <div className="notification position-relative w-50">
          <div className={style.delete__title}>
            <h4 className="m-4">Are you sure you want to delete this?</h4>
            <div className={style.delete__info}>
              <div className={style.delete__info__status} />
              <img className="m-3" src={currentProduct[0].photo} alt="product" width={40} height={40}/>
              <div className={style.delete__info__about}>
                <p className="m-0">{currentProduct[0].name}</p>
              </div>
            </div>
          </div>
          <div className={style.delete__buttons}>
            <button
              className={style.delete__cancel}
              type="button"
              onClick={() => setShowDeleteProduct(false)}>
              CANCEL
            </button>
            <button
              className={style.delete__delete}
              type="button"
              onClick={() => {
                dispatch(productAction.removeProduct(currentProduct[0]))
                setShowDeleteProduct(false)
              }}>
              <div className={style.delete__icon} />
              DELETE
            </button>
          </div>
          <button
            className={style.delete__close}
            type="button"
            onClick={() => {
              setShowDeleteProduct(false)
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

export default DeleteProduct;