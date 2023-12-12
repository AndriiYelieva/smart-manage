'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';

import style from '../style/products.module.scss';

import Dropdowns from './Dropdowns';
import CartProduct from './CartProduct';
import DeleteProduct from '../components/DeleteProduct';
import { Product } from '@/Type/Product';


export default function Products() {
  const products = useAppSelector(state => state.products);
  const [productId, setProductId] = useState(0);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const searchParams = useSearchParams();

  const typeParam = searchParams.get('type') || 'none';
  const specParam = searchParams.get('specification') || 'none';

  const filteredProducts = (preparedProducts: Product[], typeParam: string, specParam: string) => {
    let readyProducts = preparedProducts;

    if (typeParam !== 'none') {
      readyProducts = readyProducts.filter(product => product.type === typeParam);
    } if (specParam !== 'none') {
      readyProducts = readyProducts.filter(product => product.status === specParam);
    }

    return readyProducts;
  }

  const readyProducts = filteredProducts(products, typeParam, specParam);

  useEffect(() => {
    filteredProducts(products, typeParam, specParam)
  }, [typeParam, specParam, products]);

  return (
    <>
      <div className="container position-relative page">
        <div className={style.content}>
          <Dropdowns
            typeParam={typeParam}
            specParam={specParam}
            productsLength={products.length}
          />

          {readyProducts.length !== 0 ? (
            <section className="row list">
              <ul className="h-75 col-12 ps-5 border-black">
                {readyProducts.map(product => {
                  return (
                    <CartProduct
                      product={product}
                      setShowDeleteProduct={setShowDeleteProduct}
                      setProductId={setProductId}
                      key={product.id}
                    />
                  )
                })}
              </ul>
            </section>
          ) : (
            <section className="w-100 h-100 p-5">
              <h1>Oops...</h1>
              <h4> {'We didn\'t find anything.'}
                <br />
                Try changing the settings
              </h4>
            </section>
          )}
          {showDeleteProduct && (
            <DeleteProduct
              productId={productId}
              setShowDeleteProduct={setShowDeleteProduct}
            />
          )}
        </div>
      </div >

      <style>{`
          .page {
            background: #F2F2FF;
          }
          .cart {
            height: 70px;
            width: 2000px;
            margin-bottom: 12px !important;
          }
          .cart:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3) !important;
          }
          .list {
            max-height: 500px;
            max-width: 1200px;
            overflow: auto;
          }
        `}</style>
    </>
  )
};
