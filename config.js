const config = {
  BLOCKCHAIN_NODE: process.env.BLOCKCHAIN_NODE,
  BSCSCAN_API_KEY: process.env.BSCSCAN_API_KEY,
  AUTOFARMS: [
    {
      name: "Auto",
      asset: "WBNB",
      assetDecimalPlaces: 18,
      assetPid: 1,
      contractAddress: "0x0895196562C7868C5Be92459FaE7f877ED450452",
      ownerAddress: process.env.OWNER_WALLET_ADDRESS
    }
  ],
  BUNNYFARMS: [
    {
      name: "Bunny",
      asset: "CAKE",
      assetDecimalPlaces: 18,
      abiImplementationContract: "0x1953136932098ff25d2c50A20319ecaba43631D3",
      contractAddress: "0xEDfcB78e73f7bA6aD2D829bf5D462a0924da28eD",
      ownerAddress: process.env.OWNER_WALLET_ADDRESS
    }
  ]
}

module.exports = config
