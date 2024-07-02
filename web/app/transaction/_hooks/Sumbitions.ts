import { Config } from 'wagmi'
import { SendTransactionErrorType, parseEther } from 'viem'
import { type SendTransactionMutate, type SendTransactionVariables } from 'wagmi/query';

export function easyHandleTransactionSubmit(destinationAddress: string, amount: number, sendTransaction: SendTransactionMutate<Config, unknown>){
    // Obsługa danych transakcji
    console.log('Transaction submitted with:');
    console.log('Destination Address:', destinationAddress);
    console.log('Amount:', amount);
    // Tutaj możesz dodać logikę obsługi transakcji
  };

  export function sendTransaction(
    destinationAddress: string,
    amount: number,
    sendTransaction: SendTransactionMutate<Config, unknown>,
    onError?: (error: SendTransactionErrorType, variables: SendTransactionVariables<Config, any>) => Promise<unknown> | unknown
  ){

  if (!destinationAddress.startsWith('0x')) {
    throw new Error('Invalid Ethereum address format');
  }

  sendTransaction({
    to: destinationAddress as '0x{string}',
    value: parseEther(amount.toString()),
  })
}