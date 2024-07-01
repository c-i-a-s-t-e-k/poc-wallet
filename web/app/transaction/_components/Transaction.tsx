import React, { useState } from 'react';

interface TransactionProps {
  onSubmit: (destinationAddress: string, amount: number) => void;
}

const Transaction: React.FC<TransactionProps> = ({ onSubmit }) => {
  const [destinationAddress, setDestinationAddress] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(destinationAddress, amount);
    setDestinationAddress('');
    setAmount(0);
  };

  return (
    <div className="transaction">
      <h3>Enter Transaction Details</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Destination Address:
          <input
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Amount (BTC):
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Transaction;