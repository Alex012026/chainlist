module.exports = {
  chainId: 347,
  name: "Kross Network Mainnet",
  shortName: "kss",
  chain: "KRS",
  networkId: 347,
  nativeCurrency: {
    name: "Kross",
    symbol: "KSS",
    decimals: 18
  },
  rpc: [
    "https://rpc-v1.kross.network"
  ],
  faucets: [],
  infoURL: "https://kross.network",
  features: [{ name: "EIP155" }],
  icon: "kross", 
  explorers: [
    {
      name: "Kross Explorer",
      url: "https://explorer.kross.network",
      standard: "EIP3091",
      icon: "kross"
    }
  ]
};
