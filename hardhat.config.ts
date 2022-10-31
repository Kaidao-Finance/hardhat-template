import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

// Template
const { GOERLI_RPC,SEPOLIA_RPC,MUMBAI_RPC,MAINNET_RPC,OPTIMISM_RPC,ARBITRUM_RPC,POLYGON_RPC, PRIVATE_KEY, ETHERSCAN_API, OPTIMISM_API,ARBITRUM_API,POLYGON_API } = process.env;

const config: HardhatUserConfig = {
  networks: {
    goeril: {
      url: GOERLI_RPC || "",
      accounts: [PRIVATE_KEY as string] ,
    },
    sepolia: {
      url: SEPOLIA_RPC || "",
      accounts: [PRIVATE_KEY as string] ,
    },
    mumbai: {
      url: MUMBAI_RPC || "",
      accounts: [PRIVATE_KEY as string] ,
    },
    mainnet: {
      url: MAINNET_RPC || "",
      accounts: [PRIVATE_KEY as string] ,
    },
    optimism: {
      url: OPTIMISM_RPC || "",
      accounts: [PRIVATE_KEY as string] ,
    },  
    arbitrum: {
      url: ARBITRUM_RPC || "",
      accounts: [PRIVATE_KEY as string] ,
    },
    polygon: {
      url: POLYGON_RPC || "",
      accounts: [PRIVATE_KEY as string] ,
    },  
  },
  etherscan: {
    apiKey: {
      // Ethereum
      mainnet: ETHERSCAN_API as string || "",
      goerli: ETHERSCAN_API as string || "",
      sepolia: ETHERSCAN_API as string || "",
      // Optimism
      optimisticEthereum: OPTIMISM_API as string || "",
      // Arbitrum
      arbitrum: ARBITRUM_API as string || "",
      // Polygon
      polygon: POLYGON_API as string || "",
      polygonMumbai: POLYGON_API as string || "",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
