import type { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync";
// import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "zkSyncSepoliaTestnet",
  networks: {
    inMemoryNode: {
      url: "http://127.0.0.1:8011",
      ethNetwork: "", // in-memory node doesn't support eth node; removing this line will cause an error
      zksync: true,
    },
    zkSyncSepoliaTestnet: {
      url: "https://zksync-sepolia.g.alchemy.com/v2/-Z5IK5ZknQgG4obvaW3fCSA92G8-5CPE",
      ethNetwork:
        "https://eth-sepolia.g.alchemy.com/v2/-Z5IK5ZknQgG4obvaW3fCSA92G8-5CPE",
      zksync: true,
      verifyURL:
        "https://explorer.sepolia.era.zksync.dev/contract_verification",
    },
    zkSyncMainnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
      verifyURL:
        "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
    hardhat: {
      zksync: true,
    },
  },
};

export default config;
