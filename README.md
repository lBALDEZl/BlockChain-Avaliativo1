# 🔗 Counter DApp - Contador Descentralizado

Este é um projeto de um **Contador Descentralizado** desenvolvido com **Solidity**, **Hardhat**, **Ethers.js** e um **front-end em React**.  
O contador permite **incrementar, decrementar e zerar valores** diretamente em um contrato inteligente implantado em uma blockchain local, além de exibir o **nome do dono do contrato** e um **pop-up de parabéns** ao atingir um número específico de incrementos.

---

## 📌 1. Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (instalado junto com o Node)
- [Ganache](https://trufflesuite.com/ganache/) (para blockchain local)
- [MetaMask](https://metamask.io/) (extensão no navegador)

---

## 🚀 2. Rodando a Blockchain Local

### ✅ 2.1. Instalar o Ganache (caso não tenha)

```bash
npm install -g ganache
```
▶ 2.2. Iniciar o Ganache
No terminal:
``` bash
ganache
```
O Ganache exibirá:

🔗 URL RPC → http://127.0.0.1:8545

🆔 Chain ID → 1337

🔑 Contas de Teste → 10 contas com saldo fictício em ETH.

⚠ Deixe o Ganache aberto o tempo todo durante os testes.

🛠 3. Configurando e Implantando o Contrato

▶ 3.1. Instalar as dependências do projeto
No diretório principal do projeto:
```
npm install
```
▶ 3.2. Compilar o contrato
```
npx hardhat compile
```
O Hardhat irá gerar os artefatos do contrato em:
```
artifacts/contracts/Counter.sol/Counter.json
```

▶ 3.3. Implantar o contrato na blockchain local
No diretório principal:
```
npx hardhat run scripts/deploy.ts --network localhost
```
Anote o endereço do contrato exibido no terminal, algo como:
```
Counter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## 🌐 4. Configurando o MetaMask
Abra o MetaMask no navegador.

Clique no avatar (canto superior direito) → Configurações → Redes → Adicionar Rede Manualmente.

Preencha os campos:
Nome da Rede → Local Teste
Nova URL RPC → http://127.0.0.1:8545
Chain ID → 1337
Moeda → ETH
Importe uma conta do Ganache:
Clique no avatar → Importar Conta.
Cole uma das chaves privadas fornecidas pelo Ganache.

## 💻 5. Rodando o Front-End
▶ 5.1. Instalar as dependências do React
No diretório client:
```
cd client
npm install
```

▶ 5.2. Configurar o endereço do contrato
No arquivo client/src/App.tsx, substitua o endereço:
```
const contractAddress = "SEU_ENDERECO_DO_CONTRATO_AQUI";
```` 
Exemplo:
```
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
```

▶ 5.3. Iniciar o servidor React
Ainda no diretório client:
```
npm start
```
Abra no navegador (provavelmente abrirá automaticamente):
```
http://localhost:3000
```

## 🕹 6. Testando a DApp
✅ Funcionalidades:
-✔ Incrementar → Aumenta o contador no contrato.
-✔ Decrementar → Diminui o contador (não vai abaixo de 0).
-✔ Zerar → Reseta o contador para 0.
-✔ Exibe o dono do contrato → Mostra o nome definido no momento do deploy.
-✔ Pop-up de Parabéns → Exibido ao atingir um número pré-definido de incrementos.


