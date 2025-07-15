# 🚀 Counter DApp - Blockchain Avaliativo

Este projeto é uma **DApp (Decentralized Application)** simples que implementa um **contador descentralizado** utilizando **Solidity, Hardhat, Ganache e React**.  
O contador pode **incrementar, decrementar e zerar valores**, além de exibir o nome do criador do contrato e mostrar uma **mensagem de parabéns** ao atingir um número definido de incrementos.

---

## ✅ Tecnologias Utilizadas
- **Solidity** – linguagem para contratos inteligentes.  
- **Hardhat** – ambiente de desenvolvimento Ethereum.  
- **Ganache** – blockchain local para testes.  
- **Ethers.js** – interação com contratos inteligentes.  
- **React + TypeScript** – front-end da aplicação.  
- **MetaMask** – carteira digital para interagir com a blockchain.  

---
## 📂 Estrutura do Projeto
counter-dapp/
│
├── contracts/ # Contém o contrato inteligente
│ └── Counter.sol
│
├── scripts/ # Scripts Hardhat
│ └── deploy.ts
│
├── artifacts/ # Gerado automaticamente após compilação
│
├── client/ # Front-end React
│ ├── src/
│ │ ├── App.tsx
│ │ ├── App.css
│ │ └── Counter.json # ABI do contrato
│ └── package.json
│
├── hardhat.config.ts # Configurações Hardhat
└── README.md

---

## ⚙ 1. Configuração do Ambiente

### **1.1. Clonar o Repositório**
```bash
git clone https://SEU_REPOSITORIO.git
cd counter-dapp

1.2. Instalar Dependências
Instale as dependências do Hardhat:

bash
Copy
Edit
npm install
Em seguida, instale as dependências do React:

bash
Copy
Edit
cd client
npm install
cd ..
