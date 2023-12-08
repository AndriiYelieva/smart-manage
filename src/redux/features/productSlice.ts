import { Product } from '@/Type/Product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Product[] = [];

const productSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addProduct: (products, action: PayloadAction<Product>) => {
      products.push(action.payload);
    },
    initProducts: (products, action: PayloadAction<Product[]>) => {
      products.push(...action.payload);
    },
    removeProduct: (products, action: PayloadAction<Product>) => {
      return products.filter(product => product.id !== action.payload.id);
    },
  },
});

export default productSlice.reducer;
export const {
  addProduct,
  removeProduct,
  initProducts,
} = productSlice.actions;
