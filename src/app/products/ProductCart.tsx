/* eslint-disable @next/next/no-img-element */
"use client"
import { useAppSelector } from '@/redux/hooks';
import { Product } from '@/Type/Product';

import style from '@/app/style/products.module.scss';

type Props = {
  product: Product;
  setProductId: (v: number) => void;
  setShowDeleteProduct: (v: boolean) => void;
}

const ProductCart: React.FC<Props> = ({
  product,
  setProductId,
  setShowDeleteProduct,
}) => {
  const orders = useAppSelector(state => state.orders);
  const currentOrder = orders.find(order => order.id === product.order);
  const prepareGuarantee = (date: string, dateValue: string): string => {
    const startWord = dateValue === 'end' ? 'to' : 'from';


    const onlyDate = date.length > 10 ? date.split(' ').slice(0, 1).join() : date;

    return `${startWord} ${onlyDate}`;
  };

  console.log('product.guarantee.start', product.guarantee.start);
  console.log('product.guarantee.start.length', product.guarantee.start.length);
  

  return (
    <>
      <li className={style.product}>
        <div className={style.product__status}>
          <div
            className={style.product__status__circle}
            style={product.specification === 'New' ? { backgroundColor: '#CAE331' } : { backgroundColor: '#6D6D6D' }}
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
          style={product.specification === 'New' ? { color: '#CAE331' } : { color: '#000' }}
        >
          {product.specification === 'New' ? 'free' : 'under repair'}
        </p>
        <div className={style.product__tax}>
          <div className={style.product__tax__guarantee}>
            {/* <p className="m-0">{product.guarantee.start.length}</p>
            <p className="m-0">{product.guarantee.end}</p> */}
            <p className="m-0">{product.guarantee?.start !== undefined ? prepareGuarantee(product.guarantee.start, 'start') : '-'}</p>
            <p className="m-0">{product.guarantee?.end !== undefined ? prepareGuarantee(product.guarantee.end, 'end') : '-'}</p>
          </div>
          <div className={style.product__tax__price}>
            <p className="m-0">{`${product.price[0].value} $`}</p>
            <p className="m-0">{`${product.price[1].value} UAH`}</p>
          </div>
        </div>
        <div className={style.product__orderName}>
          <p className="m-0 p-0 col-1 mx-4">{product.specification}</p>
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

export default ProductCart;