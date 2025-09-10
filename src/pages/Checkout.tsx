import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout: React.FC = () => {
  const cart = useSelector((state: any) => state.cart.items || []);
  const [step, setStep] = useState<'review' | 'payment' | 'confirmed'>('review');
  const total = cart.reduce((sum: number, item: any) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-glass rounded-2xl p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Checkout</h2>
        {step === 'review' && (
          <>
            <ul className="mb-4">
              {cart.length === 0 ? (
                <li className="text-cyan-300">Your cart is empty.</li>
              ) : (
                cart.map((item: any) => (
                  <li key={item.id} className="flex justify-between py-2 border-b border-cyan-800">
                    <span>{item.name}</span>
                    <span className="font-bold">${item.price} x {item.quantity || 1}</span>
                  </li>
                ))
              )}
            </ul>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors w-full" onClick={() => setStep('payment')}>
              Proceed to Payment
            </button>
          </>
        )}
        {step === 'payment' && (
          <form className="flex flex-col gap-4" onSubmit={e => {e.preventDefault(); setStep('confirmed');}}>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Payment</h3>
            <input type="text" placeholder="Card Number" required className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
            <input type="text" placeholder="Expiry Date" required className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
            <input type="text" placeholder="CVV" required className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
            <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors">Pay Now</button>
          </form>
        )}
        {step === 'confirmed' && (
          <div className="text-center">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Payment Confirmed</h3>
            <p className="mb-4 text-cyan-200">Thank you! Your payment was successful.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
