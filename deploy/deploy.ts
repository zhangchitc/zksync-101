import { deployContract } from "../../utils";

import { ethers } from "ethers";

// Deploy a CrowdfundingCampaign contract
export default async function () {
  const contractArtifactName = "WooTokenOFT";
  const constructorArguments = [
    "WOO",
    "WOO",
    "0xd07C30aF3Ff30D96BDc9c6044958230Eb797DDBF",
    "0xc031C368b51c28266396273b0C6ce2489b00969d",
  ];
  await deployContract(contractArtifactName, constructorArguments);
}
