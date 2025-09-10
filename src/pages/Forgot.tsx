import React, { useState } from 'react';

const Forgot: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }
    // Simulate password reset
    setMessage('If this email exists, a password reset link has been sent.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-glass rounded-2xl p-8 shadow-lg w-full max-w-md flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-magenta mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="px-4 py-2 rounded bg-gray-900 text-white border border-magenta focus:outline-none"
          required
        />
        <button type="submit" className="px-6 py-2 rounded-lg bg-magenta text-white font-semibold hover:bg-cyan-600 transition-colors">Send Reset Link</button>
        {message && <div className="text-cyan-400 text-sm mt-2">{message}</div>}
        <a href="/login" className="text-cyan-400 text-sm mt-2">Back to Login</a>
      </form>
    </div>
  );
};

export default Forgot;
