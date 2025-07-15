# BlockChain-Avaliativo1
📂 Estrutura do Projeto
bash
Copy
Edit
counter-dapp/
│
├── contracts/               # Contém o contrato inteligente
│   └── Counter.sol
│
├── scripts/                 # Scripts Hardhat
│   └── deploy.ts
│
├── artifacts/               # Gerado automaticamente após compilação
│
├── client/                  # Front-end React
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── Counter.json     # ABI do contrato
│   └── package.json
│
├── hardhat.config.ts        # Configurações Hardhat
└── README.md
⚙ 1. Configuração do Ambiente
1.1. Clonar o Repositório
bash
Copy
Edit
git clone https://SEU_REPOSITORIO.git
cd counter-dapp
1.2. Instalar Dependências
Instale as dependências do Hardhat e do projeto:

bash
Copy
Edit
npm install
Entre no diretório do React e instale também:

bash
Copy
Edit
cd client
npm install
cd ..
🚀 2. Rodando a Blockchain Local
2.1. Iniciar o Ganache
Certifique-se de ter o Ganache instalado globalmente:

bash
Copy
Edit
npm install -g ganache
Inicie o Ganache:

bash
Copy
Edit
ganache
Ele exibirá:

URL RPC: http://127.0.0.1:8545

Chain ID: 1337

Contas e chaves privadas.

Deixe o Ganache aberto durante todo o teste.

🔨 3. Compilar e Implantar o Contrato
3.1. Compilar o contrato
No diretório raiz (counter-dapp):

bash
Copy
Edit
npx hardhat compile
3.2. Implantar o contrato na rede local
Com o Ganache rodando:

bash
Copy
Edit
npx hardhat run scripts/deploy.ts --network localhost
Ele exibirá algo como:

css
Copy
Edit
Counter deployed to: 0x123abc456def...
Copie esse endereço do contrato.

🌐 4. Configurar o Front-end (React)
4.1. Inserir o endereço do contrato
No arquivo client/src/App.tsx, substitua:

typescript
Copy
Edit
const contractAddress = "COLE_AQUI_O_ENDEREÇO_GERADO_NO_DEPLOY";
4.2. Rodar o front-end
No diretório client:

bash
Copy
Edit
cd client
npm start
Abra no navegador:
👉 http://localhost:3000

🦊 5. Configurar o MetaMask
Instale a extensão do MetaMask no navegador.

Adicione a rede local do Ganache:

Nome: Ganache Local

URL RPC: http://127.0.0.1:8545

Chain ID: 1337

Moeda: ETH

Importe uma conta do Ganache:

Clique no avatar do MetaMask → "Importar Conta".

Cole uma das chaves privadas exibidas pelo Ganache.

✅ 6. Testar a DApp
Abra a página http://localhost:3000.

Verifique:

✅ O nome do dono do contrato aparece.

✅ O contador começa em 0.

✅ Os botões Incrementar, Decrementar e Zerar funcionam.

✅ Quando atingir 5 incrementos, aparece a mensagem de Parabéns.
