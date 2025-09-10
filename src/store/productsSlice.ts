import { createAsyncThunk } from '@reduxjs/toolkit';
// Async thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
  try {
    // Simulate API call
    const response = await new Promise<{ data: Product[] }>((resolve) =>
      setTimeout(() => resolve({ data: initialState.items }), 500)
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch products');
  }
});
import { createSelector } from 'reselect';
// Memoized selector for products
export const selectProducts = (state: { products: ProductsState }) => state.products.items;
export const selectProductsMemoized = createSelector(
  [selectProducts],
  (items) => items
);
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  category: 'solar-panels' | 'power-stations' | 'accessories';
  specifications: {
    capacity: number;
    efficiency: number;
    dimensions: string;
    weight: number;
  };
  price: number;
  images: string[];
  description: string;
  features: string[];
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [
    {
      id: "1",
      name: "Voltora Power Station 5000",
      category: "power-stations",
      specifications: {
        capacity: 5000,
        efficiency: 98,
        dimensions: "120x60x80cm",
        weight: 120
      },
      price: 4999,
      images: ["/images/powerstation5000.png"],
      description: "High-capacity industrial power station for B2B and B2C.",
      features: ["Fast charging", "Remote monitoring", "Modular design"]
    }
  ],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;
