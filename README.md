# FTX NFT Web Application

React FTX NFT App that displays the NFTs and NFT Collections by consuming FTX REST Data API.

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]() 
[![PyPI](https://img.shields.io/pypi/status/Django.svg)]()


## Project Overview

> :warning: **There is a CORS issue**. Please make sure that you installed the below Chrome Cors Extension and activated.

**Extension :** https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

**Activated :**

![](https://github.com/iamalperen/ftx/blob/main/ss/extension.png?raw=true)


**Demo :** https://61f340a16493ed0007337c78--adoring-wright-8116a8.netlify.app/

**Screenshots :**

Main Page

![](https://github.com/iamalperen/ftx/blob/main/ss/main.png?raw=true)

Collection Detail Page

![](https://github.com/iamalperen/ftx/blob/main/ss/collection.png?raw=true)

NFT Detail Page

![](https://github.com/iamalperen/ftx/blob/main/ss/detail.png?raw=true)

**Folder Structure**

- [**assets**](assets)
- [**common**](common)
    - [**hooks**](common/hooks)
    - [**utils**](common/utils)
- [**components**](components)
    - [**CollectionDetailNFTList**](components/CollectionDetailNFTList)
    - [**CollectionsList**](components/CollectionsList)
    - [**CollectionsTopFilters**](components/CollectionsTopFilters)
    - [**Header**](components/Header)
    - [**NFTDetailCard**](components/NFTDetailCard)
- [**constants**](constants)
- [**containers**](containers)
    - [**App**](containers/App)
    - [**CollectionDetail**](containers/CollectionDetail)
    - [**Collections**](containers/Collections)
    - [**NFTDetail**](containers/NFTDetail)
- [**models**](models)
- [**services**](services)
- [**styles**](styles)
    - [**modes**](styles/modes)



## Used Technologies
- React
- React Hooks
- React Router
- React Icons
- TypeScript
- Jest
- Styled-Components
- Normalize.css
- Netlify
- ESLint
- Prettier
- Husky
- Lint-staged


## Build

- make sure you have npm on your machine
- when inside of project folder, run `npm i` or `npm install`
- after npm packages installed successfully, just run `npm run build`


## Development

- make sure you have npm on your dev machine
- when inside of project folder, run `npm i` or `npm install`
- after npm packages installed successfully, just run `npm start`
- navigate to `http://localhost:3000/`.
- the app will automatically reload if you change any of the source files.


## Meta

Created and maintained by [Alperen](https://github.com/iamalperen) under [MIT](LICENSE.md) License
