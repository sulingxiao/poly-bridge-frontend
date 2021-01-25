import element from 'element-ui/lib/locale/lang/en';
import { TARGET_MAINNET } from '@/utils/env';
import { WalletName, ChainId, TransactionStatus } from '@/utils/enums';

export default {
  ...element,
  common: {
    header: {
      brandName: 'PolyBridge',
    },
    wallets: {
      connectWallet: 'Connect Wallet',
    },
    connectWallet: {
      chainName: '{chainName} Wallet',
      walletConnected: '{walletName} Connected',
      connectWallet: 'Connect {walletName}',
    },
    footer: {
      copyright: '© 2021 Polynetwork. All rights reserved. Privacy policy',
    },
  },
  home: {
    index: {
      slogon:
        'In order to\nbuild the next generation\nInternet infrastructure,\nrealize interoperability\nbetween\nmultiple <em>chains</em>',
    },
    form: {
      title: 'Bridge',
      asset: 'Asset',
      from: 'From',
      to: 'To',
      chainName: '{chainName}\nNetwork',
      amount: 'Amount',
      max: 'MAX',
      balance: 'Balance',
      fee: 'Fee',
      connectWallet: 'Connect Wallet',
      approve: 'Approve',
      historyPrefix: 'You can view your',
      historyLink: 'history',
    },
    selectTokenBasic: {
      title: 'Select Asset',
      inputPlaceholder: 'Search name',
      hint: 'Token Name',
    },
    selectChain: {
      title: 'Select Network',
    },
    connectWallet: {
      title: 'Connect Wallet',
      chainName: '{chainName} Network',
      walletConnected: '{walletName} Connected',
      connectWallet: 'Connect {walletName}',
    },
    confirmSwap: {
      title: 'Confirm Swap',
      amount: 'Amount',
      from: 'From',
      to: 'To',
      fee: 'Fee',
      chainName: '{chainName} Network',
      receiving: 'You will receive',
    },
  },
  transactions: {
    index: {
      title: 'The historical records',
      fromChain: 'Source Chain',
      toChain: 'Destination Chain',
      hash: 'Hash: {hash}',
      amount: 'Amount',
      asset: 'Asset',
      time: 'Time',
      status: 'Status',
      pagination: 'Page {page} of {pageCount}',
    },
    details: {
      title: 'Transaction Details',
      waiting: 'The transaction is waiting to be proceeding on the {chainName}. Please be patient…',
      proceeding: 'The transaction is proceeding on the {chainName}. Please be patient…',
      proceeded: 'The transaction has been proceeded on the {chainName}.',
      confirmation: '{blocks}/{needBlocks} Confirm',
      hash: 'Hash: {hash}',
    },
  },
  buttons: {
    next: 'Next',
    confirm: 'Confirm',
    confirming: 'Confirming...',
  },
  messages: {
    copied: '"{text}" has been copied to clipboard.',
  },
  enums: {
    walletName: {
      [WalletName.Metamask]: 'Metamask',
      [WalletName.NeoLine]: 'NeoLine',
      [WalletName.O3]: 'O3',
      [WalletName.Binance]: 'Binance',
    },
    chainName: {
      [ChainId.Poly]: 'Poly',
      [ChainId.Eth]: 'Ethereum',
      [ChainId.Neo]: 'Neo',
      [ChainId.Bsc]: 'BSC',
      [ChainId.Heco]: 'Heco',
    },
    chainNetworkName: {
      [ChainId.Poly]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Eth]: TARGET_MAINNET ? 'MainNet' : 'Ropsten TestNet',
      [ChainId.Neo]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Bsc]: TARGET_MAINNET ? 'BSC MainNet' : 'BSC TestNet',
      [ChainId.Heco]: TARGET_MAINNET ? 'Heco MainNet' : 'Heco TestNet',
    },
    transactionStatus: {
      [TransactionStatus.Failed]: 'Failed',
      [TransactionStatus.Finished]: 'Finished',
      [TransactionStatus.Pending]: 'Pending',
      [TransactionStatus.SourceDone]: 'Pending',
      [TransactionStatus.SourceConfirmed]: 'Pending',
      [TransactionStatus.PolyConfirmed]: 'Pending',
    },
  },
  errors: {
    wallet: {
      UNKNOWN_ERROR: 'Unknown wallet error.',
      NOT_SUPPORTED: 'Wallet is not supported.',
      NOT_INSTALLED: 'Wallet is not installed.',
      NOT_CONNECTED: '{chainName} Wallet is not connected.',
      INCORRECT_NETWORK: 'Please switch network to {chainNetworkName} on {walletName} Wallet.',
      USER_REJECTED: 'Request is rejected by user.',
      MALFORMED_INPUT: 'Malformed input.',
      INSUFFICIENT_FUNDS: 'Insufficient funds.',
      COMMUNICATE_FAILED: 'Communicate failed with wallet.',
    },
    chain: {
      UNKNOWN_ERROR: 'Unknown chain error.',
      NOT_SUPPORTED: 'Chain is not supported.',
      COMMUNICATE_FAILED: 'Communicate failed with RPC.',
    },
    http: {
      UNKNOWN_ERROR: 'Unknown request error.',
      NETWORK_ERROR: 'Network error.',
      BAD_REQUEST: 'Bad request.',
      INTERNAL_SERVICE_ERROR: 'Internal server error.',
    },
  },
  validations: {
    required: 'Required.',
    number: 'Please input a number.',
    positive: 'Please input a positive number.',
    maxDecimal: "You've exceeded the decimal limit.",
    maxValue: "You've exceeded the max amount.",
    minValue: 'You entered less than the minimum amount.',
    address: "You've entered an invalid address.",
  },
};
