import style from '@/app/style/groups.module.scss';
import ProductCart from "./ProductCart"
import { useAppSelector } from '@/redux/hooks';

type Props = {
  setShowList: (v: boolean) => void;
  setShowAddProduct: (v: boolean) => void;
  setShowDeleteProduct: (v: boolean) => void;
  setProductId: (v: number) => void;
  orderId: number
}

const ProductsList: React.FC<Props> = ({ setShowList, orderId, setShowAddProduct, setProductId, setShowDeleteProduct }) => {
  const products = useAppSelector(state => state.products);
  const orders = useAppSelector(state => state.orders);
  const currentOrder = orders.filter(order => orderId === order.id);
  const currentProducts = products.filter(product => product.order === orderId);

  return (
    <section className="col-8 position-relative">
      <div className="border border-secondary rounded bg-white content">
        <h4 className="ps-4 pt-3">{currentOrder[0].description}</h4>
        <div className="d-flex align-items-center justify-content-start ps-3 py-2">
          <button
            type="button"
            className={style.add}
            onClick={() => setShowAddProduct(true)}
          >
            <>
              <p className={style.add__circle}><span>+</span></p>
              <p className={style.add__title}>Add product</p>
            </>
          </button>
        </div>
        <ul className="p-0 m-0">
          {currentProducts.map(product => <ProductCart
            key={product.id}
            product={product}
            setProductId={setProductId} 
            setShowDeleteProduct={setShowDeleteProduct}
            />)}
        </ul>
      </div>
      <button
        className={style.close}
        type="button"
        onClick={() => setShowList(false)}>
        X
      </button>
    </section>
  )
}

export default ProductsList