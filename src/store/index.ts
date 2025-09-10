import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import ordersReducer from './ordersSlice';
import uiReducer from './uiSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  ui: uiReducer,
  wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
