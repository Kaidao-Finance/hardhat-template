compile: 
	npx hardhat compile

chain:	
	npx hardhat node

deploy:
	npx hardhat run scripts/deploy.ts --network localhost

deploy-go:
	npx hardhat run scripts/deploy.ts --network goerli

deploy-sep:
	npx hardhat run scripts/deploy.ts --network sepolia

deploy-mainnet:
	npx hardhat run scripts/deploy.ts --network mainnet

deploy-polygon:
	npx hardhat run scripts/deploy.ts --network polygon

deploy-mumbai:
	npx hardhat run scripts/deploy.ts --network mumbai

deploy-op:
	npx hardhat run scripts/deploy.ts --network optimism

deploy-arbi:	
	npx hardhat run scripts/deploy.ts --network arbitrum

