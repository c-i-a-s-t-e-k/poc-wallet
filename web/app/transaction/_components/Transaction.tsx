import React, { useState } from 'react';
import { Config, useSendTransaction } from 'wagmi';
import { type SendTransactionMutate } from 'wagmi/query';

interface TransactionProps {
  onSubmit: (destinationAddress: string, amount: number, sendTransaction: SendTransactionMutate<Config, unknown>) => void;
}

const Transaction: React.FC<TransactionProps> = ({ onSubmit }) => {
  const [destinationAddress, setDestinationAddress] = useState<string>('0x04AA9F5c33cA539b3f0f344E6713aAb6ab2868a4');
  const [amount, setAmount] = useState<number>(0);
  const { isError, error, sendTransaction } = useSendTransaction()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(destinationAddress, amount, sendTransaction);
    setDestinationAddress('0x');
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
            step="0.0001"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            required
          />
        </label>
        <button type="submit">Submit</button>
        {isError && (
              <div className="text-red-500">
                <p>Error: {error.message}</p>
              </div>
          )}
      </form>
    </div>
  );
}

export default Transaction;