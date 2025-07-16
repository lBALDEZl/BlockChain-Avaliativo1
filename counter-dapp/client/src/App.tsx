import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import CounterABI from "./Counter.json";
import "./App.css";

// Provider Hardhat/Ganache (rede local)
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// Substitua com o endereço gerado no deploy todas as vezes que reiniciar
const contractAddress = "0x0EA67fB038b9705abcA6754d18E723B536902546";

// Contrato genérico (para evitar erro de tipagem)
const contract = new ethers.Contract(contractAddress, CounterABI.abi, provider) as any;

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [account, setAccount] = useState("");
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [ownerName, setOwnerName] = useState(""); // Dono do contrato
  const [showPopup, setShowPopup] = useState(false); // 🔹 Controle do pop-up
  const [message, setMessage] = useState(""); // Mensagem de parabéns       

  useEffect(() => {
    async function load() {
      const accounts = await provider.listAccounts();
      setAccount(typeof accounts[0] === "string" ? accounts[0] : accounts[0].address);

      const signerInstance = await provider.getSigner();
      setSigner(signerInstance);

      const contractWithSigner = contract.connect(signerInstance);

      const currentCount = await contractWithSigner.getCount();
      setCount(Number(currentCount));

      const name = await contractWithSigner.getOwnerName();
      setOwnerName(name);
    }
    load();
  }, []);

  useEffect(() => {
    if (count === 5 || count === 10 || count === 15) { // Números para Parabéns (mude se quiser){
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [count]);

  
  const checkCongratulations = (newCount: number) => {
    if (newCount >= 10) { // Número para Parabéns (mude se quiser)
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Fecha após 3s
    } else {
      setMessage(""); 
    }
  };

   const increment = async () => {
    if (!signer) return;
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.increment();
    await tx.wait();
    const newCount = await contractWithSigner.getCount();
    setCount(Number(newCount));

    // Mensagem de parabéns ao chegar no número específico
   if (Number(newCount) === 5 || count === 10 || count === 15) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Fecha após 3s
    }
  };

  const decrement = async () => {
    if (!signer) return;
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.decrement();
    await tx.wait();
    const newCount = await contractWithSigner.getCount();
    setCount(Number(newCount));
  };

  const reset = async () => {
    if (!signer) return;
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.reset();
    await tx.wait();
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Contador Descentralizado</h1>
      <p className="owner-name">Dono do contrato: {ownerName}</p>
      <p>Conta: {account}</p>
      <p>Contador: {count}</p>

      <div className="button-row">
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>

      <button className="reset-button" onClick={reset}>Zerar</button>

      {showPopup && (
        <div className="popup">
          🎉 Parabéns! Você atingiu {count} incrementos! 🎉
        </div>
      )}
    </div>
  );
};

export default App;
