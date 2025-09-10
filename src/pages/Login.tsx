import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Simulate API call
    // Find user in demo list
    if ((email === 'alice@voltora.com' && password === 'password') || (email === 'bob@voltora.com' && password === 'password')) {
      const user = email === 'alice@voltora.com'
        ? { id: 'u1', name: 'Alice Buyer', email, role: 'buyer' as 'buyer' }
        : { id: 'u2', name: 'Bob Supplier', email, role: 'supplier' as 'supplier' };
      dispatch(login(user));
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-glass rounded-2xl p-8 shadow-lg w-full max-w-md flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none"
          required
        />
        {error && <div className="text-red-400 text-sm">{error}</div>}
        <button type="submit" className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors">Login</button>
        <a href="/register" className="text-cyan-400 text-sm mt-2">Don't have an account? Register</a>
        <a href="/forgot" className="text-magenta text-sm mt-2">Forgot password?</a>
      </form>
    </div>
  );
};

export default Login;
