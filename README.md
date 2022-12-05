# NFT Alpha - NFT Data on Evmos

NFT discover made easy with NFT Alpha.
Unleash your NFT analytics power on Evmos.

- Open an free EVM on-chain data from Covalent on the Evmos blockchain.
- Go down to the rabbit hole and surface NFTs.
  NFT collections, items and wallets. All in!
- Discover opportunities and perform due diligence on the Evmos NFT ecosystem.

[Website - NFT Alpha](https://www.nftalpha.app)

[Project Slides Deck](https://ivanmolto.mypinata.cloud/ipfs/QmSbgirs8hVHakyT3hv5xqTxq7a4vgk48B48FFaconcDyu)

[Video Demo](https://youtu.be/TyV7i-kEk9E)

## Event

The project has been built during the [Evmos](https://evmos.org)-[Covalent](https://covalenthq.com) #OneMillionWallets Hackathon powered by Encode Club. [Learn more here](https://www.encode.club/evmoscovalent-hack)

## Overview

### Home

A feature section all about NFT collections, token items, wallets on Evmos powered by Covalent. And a call to action.

![](https://ivanmolto.mypinata.cloud/ipfs/QmVcC3vnFyyVu44yWQvQDeyBEJaAfV74bMVM84SwYKsH4E)

### NFT Market Overview

A curated list of NFT collections. For each collection we showcase an image, a short description, twitter profile and website link. Twitter and website links open in a new browser tab. The image of the collection scales up when hovering over it and links to the NFT collection profile.

![](https://ivanmolto.mypinata.cloud/ipfs/QmPETRBxrTjTfx4e2u9mFWehba8n638rME3rrnNA8s4CQK)

### NFT Collection Profiler

A form to be filled with the contract address of a NFT collection to profile.

![](https://ivanmolto.mypinata.cloud/ipfs/QmcY9yrjThpUuKuZsKxCZDJHBMjmCMgYivUQh3wQNbWdVa)

A deep dive on a collection. The page displays for each NFT collection the name, the number of items, the symbol, the contract address, the Evmos chain, a description, and different links to Evmos EVM Explorer, Orbit Market and the NFT Item Profiler.

![](https://ivanmolto.mypinata.cloud/ipfs/QmRx2VqsKw1R9oebWxm9pbuGRbReYCwrqegDdBtFsVksiR)

### NFT Item Profiler

A form to be filled with the contract address of a NFT collection to profile, and the token id that we want to know more information.

![](https://ivanmolto.mypinata.cloud/ipfs/Qma6pFWrCrLNTr7Tqwdh8taUVpwyFWdwDwM5VgoQPeEb8z)

A deep dive on the Token ID. The page displays for a token ID the name of the NFT collection and ticker symbol, name of the Token ID, the wallet address of the owner(link to the Evmos EVM Explorer), the item number, the contract address (link to the Evmos EVM Explorer), link to the Orbit Market, attributes, image, and recent activity list (transfers, sales, etc).

![](https://ivanmolto.mypinata.cloud/ipfs/QmdMhXqe5T8P4qvJ19ZDf5Tnipwquqg2TCqyYJFJuWEycZ)

### NFT Wallet Profiler

A form to be filled with the wallet address to find the balance of NFTs in it.

![](https://ivanmolto.mypinata.cloud/ipfs/QmdWSW8eksRwkap5pytwiGuaatKdFAXoUpwAheUs5RMqsi)

The page displays the avatar of the wallet address, a link to the Evmos EVM Explorer the balance of NFTs in the wallet address.

![](https://ivanmolto.mypinata.cloud/ipfs/QmY8NGzSQH12kneuGu1eoctEzbG7tKKK2PJt6zKTonhf4A)

## Covalent API endpoints used

- Get NFT token IDs for contract (NFT - Class A endpoint)
- Get NFT transactions for contract (NFT - Class A endpoint)
- Get NFT external metadata for contract (NFT - Class A endpoint)
- Get token balances for address (Balances - Class A endpoint)

## Set up

This application uses up to 4 different [Covalent API endpoints](https://www.covalenthq.com/docs/api/#/0/0/USD/1) from [Covalent](https://www.covalenthq.com) as mentioned above.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other clients and libraries used are [React Query](https://tanstack.com/query/v4), [urql](https://formidable.com/open-source/urql/), [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview) and [TailwindCSS](https://tailwindcss.com).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## License

The code is licensed under a MIT License.
