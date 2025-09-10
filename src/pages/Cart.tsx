
import React, { useState } from 'react';

const initialCart = [
  { id: 1, name: 'Voltora Power Station 5000', price: 1999 },
  { id: 2, name: 'Voltora Solar Panel X', price: 899 },
];

const Cart: React.FC = () => {
  const [cart, setCart] = useState(initialCart);
  const [step, setStep] = useState<'cart' | 'checkout' | 'payment' | 'confirmed' | 'shipped'>('cart');
  const [orderId, setOrderId] = useState<string | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Shopping Cart</h2>
      {step === 'cart' && (
        <div className="bg-glass rounded-2xl p-6 shadow-lg mb-8 w-full max-w-lg">
          {cart.length === 0 ? (
            <p className="text-cyan-300">Your cart is empty.</p>
          ) : (
            <>
              <ul className="mb-4">
                {cart.map(item => (
                  <li key={item.id} className="flex justify-between py-2 border-b border-cyan-800">
                    <span>{item.name}</span>
                    <span className="font-bold">${item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors w-full" onClick={() => setStep('checkout')}>
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
      {step === 'checkout' && (
        <div className="bg-glass rounded-2xl p-6 shadow-lg w-full max-w-lg">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Checkout</h3>
          <form className="flex flex-col gap-4" onSubmit={e => {e.preventDefault(); setOrderId('ORD123456'); setStep('payment');}}>
            <input type="text" placeholder="Name" required className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
            <input type="email" placeholder="Email" required className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
            <input type="text" placeholder="Address" required className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
            <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors">Create Order</button>
          </form>
        </div>
      )}
      {step === 'payment' && (
        <div className="bg-glass rounded-2xl p-6 shadow-lg w-full max-w-lg">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Mobile Money Payment</h3>
          <p className="mb-4 text-cyan-200">Order ID: <span className="font-bold">{orderId}</span></p>
          <form className="flex flex-col gap-4" onSubmit={e => {e.preventDefault(); setStep('confirmed');}}>
            <input type="text" placeholder="Mobile Money Number" required className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
            <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors">Pay Now</button>
          </form>
        </div>
      )}
      {step === 'confirmed' && (
        <div className="bg-glass rounded-2xl p-6 shadow-lg w-full max-w-lg text-center">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Payment Confirmed</h3>
          <p className="mb-4 text-cyan-200">Thank you! Your payment was successful.</p>
          <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors" onClick={() => setStep('shipped')}>
            Generate Shipment
          </button>
        </div>
      )}
      {step === 'shipped' && (
        <div className="bg-glass rounded-2xl p-6 shadow-lg w-full max-w-lg text-center">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Order Shipped</h3>
          <p className="mb-4 text-cyan-200">Your order is on its way! Shipment is being processed for delivery.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
