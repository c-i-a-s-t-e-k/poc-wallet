import { useAccount } from 'wagmi';

const account = useAccount();

const SimpleTransactionABI = [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferEther",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];
  
  const CONTRACT_ADDRESS = JSON.stringify(account.addresses); // Zamień na adres swojego kontraktu
  