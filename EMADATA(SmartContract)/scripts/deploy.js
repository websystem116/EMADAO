const hre = require('hardhat');

async function main() {
  const token = await hre.ethers.deployContract('ArbitrumToken');
  await token.waitForDeployment();
  console.log(`address : ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});