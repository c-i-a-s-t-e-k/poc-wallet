import React, { useState } from 'react';
import { Config, useSendTransaction } from 'wagmi';
import { type SendTransactionMutate } from 'wagmi/query';
import Label from '@/components/Form/Label';
import InputText from '@/components/Form/InputText';
import Button from '@/components/Button/Button';

interface TransactionProps {
  onSubmit: (destinationAddress: string, amount: number, sendTransaction: SendTransactionMutate<Config, unknown>) => void;
}

const Transaction: React.FC<TransactionProps> = ({ onSubmit }) => {
  const [destinationAddress, setDestinationAddress] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const { isError, error, sendTransaction } = useSendTransaction()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(destinationAddress, amount, sendTransaction);
    setAmount(0);
  };

  return (
    <div className="transaction">
      <h2 className="mb-5 w-full text-center text-2xl font-semibold text-white lg:text-left">
        Enter Transaction Details
      </h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className='mb-5'>
          <Label htmlFor='destination'> Destination Address: </Label>
          <InputText 
            id='destination'
            placeholder='address'
            onChange={(e) => setDestinationAddress(e.target.value)}
            required 
          />
        </div>
        <div className='mb-5'>
        <Label htmlFor='amount'> Amount (BTC): </Label>
          <input
              type="number"
              step="0.0001"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              required
            />
        </div>
        <div className='mb-5'>
          <Button 
            buttonContent={
              <>sumbit</>
              } 
            type='submit'
            />
          {isError && (
                <div className="text-red-500">
                  <p>Error: {error.message}</p>
                </div>
            )}
        </div>
      </form>
    </div>
  );
}

export default Transaction;