/* eslint-disable no-undef */

const {
    web3Enable,
    web3Accounts,
    web3AccountsSubscribe,
    web3FromAddress,
    web3FromSource,
    isWeb3Injected,
    web3EnablePromise,
} = require('@polkadot/extension-dapp');
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { typesBundleForPolkadot } = require('@crustio/type-definitions');

/* @polkadot/extension-dapp */
window.web3Enable = web3Enable;
window.web3Accounts = web3Accounts;
window.web3AccountsSubscribe = web3AccountsSubscribe;
window.web3FromAddress = web3FromAddress;
window.web3FromSource = web3FromSource;
window.isWeb3Injected = isWeb3Injected;
window.web3EnablePromise = web3EnablePromise;

/* @polkadot/api */
window.ApiPromise = ApiPromise;
window.WsProvider = WsProvider;

/* @crustio/type-definitions */
window.typesBundleForPolkadot = typesBundleForPolkadot;
