# Use Web3.js to Query Amount of Staked Tokens in Autofarm

To use:
1. You need node.js installed
2. `npm install`
3. Supply necessary environment variables. You are free to do this however. In development, you may create a `.env` file at the root of this project.

    Sample content of `.env`
    ```
    BLOCKCHAIN_NODE="https://bsc-dataseed4.binance.org/"
    BSCSCAN_API_KEY="YOUR_BSC_API_KEY" # you can get one at https://bscscan.com/myapikey
    OWNER_WALLET_ADDRESS="YOUR_WALLET_ADDRESS"
    ```
4. Customize `config.js` according to what farms you are participating in.

    The only tricky part is finding the farm's PID for whatever token you're farming. I haven't explored the best way to obtain the PID yet except to brute force it. You can use the `stakedWantTokens` function and manually go from 1 -> x and compare the output of the balance of your staked tokens and what you see on Autofarm's UI aka `https://autofarm.network/`. If you don't want to use the codebase here to figure it out, you can also interact with the smart contract at `https://bscscan.com/address/0x0895196562c7868c5be92459fae7f877ed450452#readContract` -> Contract -> Read Contract and scroll down to look for the `stakedWantTokens`
5. To run this code with `npm run start`

# Pool Pids
As mentioned above, you are likely going to have to brute force or figure a better way to find the PIDs of your farm.

Here are the PIDs I recognize thus far:
|Farm|PID|
|---|---|
|WBNB|1|
|BTCB|2|
|ETH|3|
|WBNB-AUTO|8|
|WBNB-CAKE|8|


# Features
This is just a very simple repository to show you how you can interact with Smart Contracts using Web3 and a hosted full node.
The code is somewhat specific to Autofarm (BSC) but you can adapt the code to work with ETH as well.

*Potential features*
1. Retrieve price
2. In the case of staked LP tokens, query pool contract to find out the percentage ownership of the pool and the total locked paired assets and figure out how much of each token you own.