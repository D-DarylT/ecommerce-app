import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import PrivateRoute from './components/PrivateRoute';
const Home = React.lazy(() => import('./pages/Home'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const About = React.lazy(() => import('./pages/About'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SupplierPortal = React.lazy(() => import('./pages/SupplierPortal'));
const Team = React.lazy(() => import('./pages/Team'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Favorites = React.lazy(() => import('./pages/Favorites'));
const BuyerDashboard = React.lazy(() => import('./pages/BuyerDashboard'));
const SupplierDashboard = React.lazy(() => import('./pages/SupplierDashboard'));
const PaymentGateway = React.lazy(() => import('./pages/PaymentGateway'));

const AppRoutes = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* Buyer protected routes */}
      <Route path="/dashboard" element={<PrivateRoute roles={['buyer']}><Dashboard /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute roles={['buyer']}><Profile /></PrivateRoute>} />
      <Route path="/orders" element={<PrivateRoute roles={['buyer']}><Orders /></PrivateRoute>} />
      <Route path="/favorites" element={<PrivateRoute roles={['buyer']}><Favorites /></PrivateRoute>} />
    <Route path="/buyer-dashboard" element={<PrivateRoute roles={['buyer']}><BuyerDashboard /></PrivateRoute>} />
      {/* Supplier/Admin protected routes */}
      <Route path="/supplier" element={<PrivateRoute roles={['supplier']}><SupplierPortal /></PrivateRoute>} />
    <Route path="/supplier-dashboard" element={<PrivateRoute roles={['supplier','admin']}><SupplierDashboard /></PrivateRoute>} />
    <Route path="/payment-gateway" element={<PrivateRoute roles={['buyer','supplier','admin']}><PaymentGateway /></PrivateRoute>} />
*** End Patch
    </Routes>
  </React.Suspense>
);

export default AppRoutes;
