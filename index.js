if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}

const config = require("./config")

const Web3 = require("web3");
const axios = require("axios");


async function getContractAbi(contractId) {
  const requestOptions = {
    method: "GET",
    url: `https://api.bscscan.com/api?module=contract&action=getabi&address=${contractId}&apikey=${config.BSCSCAN_API_KEY}`, //hardcoded for Binance Smart Chain
  }

  let res;

  try {
    res = await axios(requestOptions)
  } catch (error) {
    console.log(error)
    throw error
  }

  return JSON.parse(res.data.result)
}

async function getBalance(contractId, assetPid, ownerAddress) {
  const contractAbi = await getContractAbi(contractId)
  const web3 = new Web3(config.BLOCKCHAIN_NODE);
  const farmContract = new web3.eth.Contract(contractAbi, contractId);

  const res = await farmContract.methods.stakedWantTokens(assetPid, ownerAddress).call()

  return +res
}

async function start() {
  config.AUTOFARMS.forEach(async (farm) => {
    let balance = await getBalance(farm.contractAddress, farm.assetPid, farm.ownerAddress)

    balance /= Math.pow(10, farm.assetDecimalPlaces)

    console.log(`${farm.asset} ${balance}`)
  })
}

start()

