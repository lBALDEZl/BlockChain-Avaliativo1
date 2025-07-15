import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import CounterABI from "./Counter.json";
import "./App.css";

// Provider Hardhat/Ganache (rede local)
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// Substitua com o endereço gerado no deploy
const contractAddress = "0x6fB3609f71933A69baF3633B5105079b9115DC81";

// Contrato genérico (para evitar erro de tipagem)
const contract = new ethers.Contract(contractAddress, CounterABI.abi, provider) as any;

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [account, setAccount] = useState("");
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  useEffect(() => {
    async function load() {
      const accounts = await provider.listAccounts();

      let accountAddress: string;
      if (typeof accounts[0] === "string") {
        accountAddress = accounts[0];
      } else if ("address" in accounts[0]) {
        accountAddress = accounts[0].address;
      } else {
        accountAddress = "";
      }
      setAccount(accountAddress);

      const signer = await provider.getSigner();
      setSigner(signer);

      const contractWithSigner = contract.connect(signer);
      const currentCount = await contractWithSigner.getCount();
      setCount(Number(currentCount));
    }
    load();
  }, []);

  const increment = async () => {
    if (!signer) return;
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.increment();
    await tx.wait();
    const newCount = await contractWithSigner.getCount();
    setCount(Number(newCount));
  };

  const decrement = async () => {
    if (!signer) return;
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.decrement();
    await tx.wait();
    const newCount = await contractWithSigner.getCount();
    setCount(Number(newCount));
  };

  return (
    <div className="container">
      <h1>Contador Descentralizado</h1>
      <p>Conta: {account}</p>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default App;
