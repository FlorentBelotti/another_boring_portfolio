# Token Minting Feature - Guide d'utilisation

## 🎨 Fonctionnalité

La page Token permet de minter des NFTs directement depuis votre portfolio en utilisant le smart contract TokenizeArt déployé sur la blockchain Ethereum.

## 📋 Prérequis

1. **MetaMask** installé dans votre navigateur
2. **Ethers** (des ETH ou tokens de test selon le réseau)
3. Le **contrat déployé** à l'adresse : `0xF06313E7a5254D13c950Bc9C1090E37287ec619c`

## 🚀 Comment utiliser

### 1. Accéder à la page Token

- Cliquez sur "Token" dans le header du portfolio
- La page s'ouvre avec le formulaire de mint

### 2. Connecter votre wallet

- Cliquez sur "Connect MetaMask"
- Approuvez la connexion dans MetaMask
- Votre adresse apparaîtra en haut du formulaire

### 3. Choisir le type de mint

#### Option A : Mint with URI

- Entrez l'adresse du destinataire
- Entrez l'URI des métadonnées (IPFS par défaut)
- Cliquez sur "MINT NFT"

#### Option B : Mint with Metadata

- Entrez l'adresse du destinataire
- Entrez le nom du NFT
- Entrez le hash IPFS de l'image
- Cliquez sur "MINT NFT"

### 4. Confirmer la transaction

- MetaMask s'ouvrira pour confirmer
- Vérifiez les frais de gas
- Confirmez la transaction
- Attendez la confirmation

## 📱 Valeurs par défaut

- **Metadata URI** : `ipfs://bafybeih6gu7caabyc4nzkz72tfsn4v7s5mupkk5ffrl3rhyuvjks55knq4`
- **NFT Name** : `42 Art by fbelotti`
- **Image IPFS** : `bafybeih6gu7caabyc4nzkz72tfsn4v7s5mupkk5ffrl3rhyuvjks55knq4`

## 🔐 Sécurité

- Seul le propriétaire du contrat peut minter (fonction `onlyOwner`)
- Les transactions sont signées via MetaMask
- Le contrat est vérifié et auditable

## 🛠️ Développement

### Fichiers importants

- `/src/components/pages/token.tsx` - Page desktop
- `/src/components/mobile/tokenMobile.tsx` - Page mobile
- `/src/hooks/useWeb3.ts` - Hook personnalisé Web3
- `/src/contracts/NFTContract.ts` - ABI et adresse du contrat

### Tester en local

```bash
npm run dev
```

### Déployer

```bash
npm run deploy
```

## 📊 Informations affichées

- **Wallet connecté** : Votre adresse raccourcie
- **Total Minted** : Nombre total de NFTs créés
- **Contract** : Adresse du smart contract

## ⚠️ Réseau

Assurez-vous d'être connecté au bon réseau Ethereum (Mainnet, Sepolia, etc.) selon où votre contrat est déployé.

## 🐛 Dépannage

### "Please connect your wallet first"

→ Cliquez sur "Connect MetaMask" avant de minter

### "Transaction failed"

→ Vérifiez que vous êtes le propriétaire du contrat
→ Vérifiez que vous avez assez d'ETH pour les frais de gas

### "MetaMask not detected"

→ Installez l'extension MetaMask dans votre navigateur

## 📚 Ressources

- [Projet TokenizeArt](https://github.com/FlorentBelotti/42_cursus_TokenizeArt)
- [Documentation Ethers.js](https://docs.ethers.org/)
- [Documentation MetaMask](https://docs.metamask.io/)
