import { Order } from '@/Type/Order';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Order[] = [];

const ordersSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addOrder: (orders, action: PayloadAction<Order>) => {
      orders.push(action.payload);
    },
    initOrders: (orders, action: PayloadAction<Order[]>) => {
      orders.push(...action.payload);
    },
    removeOrder: (orders, action: PayloadAction<Order>) => {
      return orders.filter(order => order.id !== action.payload.id);
    },
  },
});

export default ordersSlice.reducer;
export const {
  addOrder,
  initOrders,
  removeOrder,
} = ordersSlice.actions;
