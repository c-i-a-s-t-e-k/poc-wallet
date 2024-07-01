'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import Transaction from './_components/Transaction';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function MakeTransactionPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //  Fix hydration issues
  if (!isMounted) {
    return null;
  }
  const handleTransactionSubmit = (destinationAddress: string, amount: number) => {
    // Obsługa danych transakcji
    console.log('Transaction submitted with:');
    console.log('Destination Address:', destinationAddress);
    console.log('Amount:', amount);
    // Tutaj możesz dodać logikę obsługi transakcji
  };

  return (
    <>
      <Header />
      <Main>
        <Transaction onSubmit={handleTransactionSubmit} /> 
      </Main>
      <Footer />
    </>
  );
}
