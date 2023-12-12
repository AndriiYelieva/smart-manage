/* eslint-disable @next/next/no-img-element */
import { Product } from '@/Type/Product';
import style from '@/app/style/groups.module.scss';

type Props = {
  product: Product;
  setProductId: (v: number) => void;
  setShowDeleteProduct: (v: boolean) => void;
}

const ProductCart: React.FC<Props> = ({ product, setProductId, setShowDeleteProduct }) => {
  return (
    <li className={style.cart}>
      <div className={style.cart__status}
        style={product.specification === 'New' ? { backgroundColor: '#CAE331' } : { backgroundColor: '#6D6D6D' }}
      />
      <img
        className="object-fit-cover"
        src={product.photo}
        alt="product"
        width={50}
        height={50}
      />
      <div className={style.cart__about}>
        <p className="m-0">{product.name}</p>
      </div>
      <p
        className="m-0 p-0 col-1"
        style={product.specification === 'New' ? { color: '#CAE331' } : { color: '#000' }}
      >
        {product.specification === 'New' ? 'free' : 'under repair'}
      </p>
      <button
        type="button"
        className={style.cart__trash}
        onClick={() => {
          setShowDeleteProduct(true)
          setProductId(product.id)
        }}
      />
    </li>
  )
}

export default ProductCart;