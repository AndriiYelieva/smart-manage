/* eslint-disable @next/next/no-img-element */
"use client"
import style from '@/app/style/products.module.scss';
import { useAppSelector } from '@/redux/hooks';
import { Product } from '@/Type/Product';

type Props = {
  product: Product;
  setProductId: (v: number) => void;
  setShowDeleteProduct: (v: boolean) => void;
}

const CartProduct: React.FC<Props> = ({
  product,
  setProductId,
  setShowDeleteProduct,
}) => {
  const orders = useAppSelector(state => state.orders);
  const currentOrder = orders.find(order => order.id === product.order);
  const prepareGuarantee = (date: string, dateValue: string): string => {
    const startWord = dateValue === 'end' ? 'to' : 'from';

    const onlyDate = date.split(' ').slice(0, 1).join();

    return `${startWord} ${onlyDate}`;
  };

  return (
    <>
      <li className={style.product}>
        <div className={style.product__status}>
          <div
            className={style.product__status__circle}
            style={product.status !== 'new' ? { backgroundColor: '#6D6D6D' } : { backgroundColor: '#CAE331' }}
          />
          <img
            className="object-fit-cover"
            src={product.photo}
            alt="product"
            width={50}
            height={50}
          />
        </div>
        <div className={style.product__about}>
          <p className="m-0">{product.name}</p>
        </div>
        <p
          className="m-0 p-0 col-1"
          style={product.status !== 'new' ? { color: '#000' } : { color: '#CAE331' }}
        >
          {product.status === 'new' ? 'free' : 'under repair'}
        </p>
        <div className={style.product__tax}>
          <div className={style.product__tax__guarantee}>
            <p className="m-0">{product.guarantee?.start !== undefined ? prepareGuarantee(product.guarantee.start, 'start') : '-'}</p>
            <p className="m-0">{product.guarantee?.end !== undefined ? prepareGuarantee(product.guarantee.end, 'end') : '-'}</p>
          </div>
          <div className={style.product__tax__price}>
            <p className="m-0">{`${product.price[0].value} $`}</p>
            <p className="m-0">{`${product.price[1].value} UAH`}</p>
          </div>
        </div>
        <div className={style.product__orderName}>
          <p className="m-0 p-0 col-1 mx-4">{product.status}</p>
          <p className="m-0 text-decoration-underline">{currentOrder?.description}</p>
        </div>
        <div className={style.product__date}>
          <p className="m-0">{product.date}</p>
        </div>

        <button
          type="button"
          className={style.product__trash}
          onClick={() => {
            setShowDeleteProduct(true)
            setProductId(product.id)
          }}
        />
      </li>
    </>
  )
}

export default CartProduct;