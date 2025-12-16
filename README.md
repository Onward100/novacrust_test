# Crypto checkout

A fully functional cryptocurrency checkout UI built with **React** (Next.js 13), **TailwindCSS**, and **React Toastify**.  
This project provides a sleek, responsive interface for users to select assets, enter amounts, choose wallets, and simulate a conversion.

## Features

- **Tabs for Conversion Type**: Switch between `"crypto-cash"`, `"cash-crypto"`, and `"crypto-loan"`.
- **Amount Input**: Users can enter the amount to pay or receive.
- **Asset Selection with Icons**: Dropdowns with icons for crypto and fiat assets.
- **Wallet Selection**: Select wallets like MetaMask, Rainbow, WalletConnect, or others.
- **Searchable Dropdown for Crypto**: ETH and other crypto options include a search bar.
- **Responsive Design**: Mobile-friendly and modern UI.

## Setup Instructions

1. **Clone the repository**

git clone https://github.com/your-username/crypto-fiat-checkout.git
cd crypto-fiat-checkout

npm install
# or
yarn install

npm run dev
# or
yarn dev

Folder Structure
├── components/
│   ├── Checkout.tsx
│   ├── Tabs.tsx
│   ├── Field.tsx
│   └── AmountRow.tsx
├── hooks/
│   └── useCheckout.ts
├── types/
│   └── checkout.ts
├── public/
│   └── icons/  
├── pages/
│   └── index.tsx
└── README.md


