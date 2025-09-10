import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  userId: string;
  items: Array<{ productId: string; quantity: number }>;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

interface OrdersState {
  orders: Order[];
}

const persistedOrders = localStorage.getItem('orders');
const initialState: OrdersState = {
  orders: persistedOrders ? JSON.parse(persistedOrders) : [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<Order[]>) {
      state.orders = action.payload;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
  },
});

export const { setOrders, addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
