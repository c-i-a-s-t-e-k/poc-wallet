'use client';
import { useAccount, useBalance} from 'wagmi';
import { useEffect, useState } from 'react';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function HomePage() {
  const { address, isConnected, status, chain } = useAccount();
  const [error, setError] = useState<string | null>(null);
  const { data: balance, isError, isLoading, refetch, error: balanceError } = useBalance({
    address,
    chainId: chain?.id,
  });
  
  useEffect(() => {
    
    if (isError && balanceError) {
      setError(balanceError.message);
    } else {
      setError(null);
    }
  }, [isError, balanceError]);

  useEffect(() => {
    setError(null);
  }, [address]);


  return (
    <>
      <Header />
        <main className="container mx-auto flex flex-col px-8 py-16">
          <div>
            <h2 className="text-xl">Developer information</h2>
            <br />
            <h3 className="text-lg">Account</h3>
            <ul>
              <li>
                <b>status</b>: {status}
              </li>
              <li>
                <b>address</b>: {address}
              </li>
              <li>
                <b>balance</b>:
                {isLoading
                  ? 'Loading...'
                  : isError
                  ? 'Error fetching balance'
                  : `${balance} ETH`}
              </li>
              <li>
                <b>chain</b>: {chain?.name} {chain?.id}
            </li>
            </ul>
            {isError && (
              <div className="text-red-500">
                <p>Error: {error}</p>
                <button onClick={() => refetch()}>Retry</button>
              </div>
            )}
            
          </div>
        </main>
      <Footer />
      </>
  );
}
