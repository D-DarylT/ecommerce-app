import React from 'react';

const PaymentGateway: React.FC = () => {
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [transactions, setTransactions] = React.useState([
    { id: '5001', amount: 1999, status: 'Success' },
    { id: '5002', amount: 499, status: 'Pending' },
    { id: '5003', amount: 129, status: 'Failed' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment
    const newTxn = {
      id: (5000 + transactions.length + 1).toString(),
      amount: Math.floor(Math.random() * 3000) + 100,
      status: ['Success', 'Pending', 'Failed'][Math.floor(Math.random() * 3)]
    };
    setTransactions([newTxn, ...transactions]);
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-2">
      <h2 className="text-3xl font-semibold mb-6">Payment Gateway</h2>
      <p className="mb-4">Securely process your payments and view transaction history here.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Payment Form</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Card Number" value={cardNumber} onChange={e => setCardNumber(e.target.value)} className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none" />
            <input type="text" placeholder="Expiry Date" value={expiry} onChange={e => setExpiry(e.target.value)} className="px-4 py-2 rounded bg-gray-900 text-white border border-magenta focus:outline-none" />
            <input type="text" placeholder="CVV" value={cvv} onChange={e => setCvv(e.target.value)} className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none" />
            <button type="submit" className="px-6 py-2 rounded bg-cyan-400 text-gray-900 font-bold hover:bg-magenta transition-all">Pay Now</button>
          </form>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-magenta">Transaction History</h3>
          <ul className="list-disc ml-4">
            {transactions.map(txn => (
              <li key={txn.id}>TXN #{txn.id} - ${txn.amount} - {txn.status}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PaymentGateway;
