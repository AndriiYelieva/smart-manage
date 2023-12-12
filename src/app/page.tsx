'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { products } from '@/FakeApi/products'
import { orders } from '@/FakeApi/orders'
import * as productsAction from '@/redux/features/productSlice';
import * as ordersAction from '@/redux/features/orderSlice';
import './page.module.css'

export default function Home() {
  const initProducts = useAppSelector(state => state.products);
  const initOrders = useAppSelector(state => state.orders);
  const dispatch = useAppDispatch()

  if (!initOrders.length && !initProducts.length) {
    dispatch(productsAction.initProducts(products));
    dispatch(ordersAction.initOrders(orders));
  }

  return (
    <h1 className="m-auto">DzenCode test task</h1>
  )
}
