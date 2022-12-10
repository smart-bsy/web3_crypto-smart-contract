### WEB3_CRYPTO PROJECT

[youtube video link](https://www.youtube.com/watch?v=Wn_Kb3MR_cU)

1. init `.env`

```

GOERLI_PROVIDER_URL=" alchemy goerli provider url"
POLYGON_PROVIDER_URL="  alchemy goerli provider url"
TEST_ACCOUNT_PRIVATE_KEY=" your account private key"

GOERLI_CONTRACT_VERIFY_API_KEY=" goerli verify key"
POLYGON_CONTRACT_VERIFY_API_KEY=" mumbai verify key"

UPDATE_FRONT_END=true

```

2. `open ./deploy/99-update-front-back.js`

```

const UPDATE_FRONT_END = process.env.UPDATE_FRONT_END;
const FRONT_END_TRANSACTIONS_ABI =
  "../frontbackend/src/constants/transactions-abi.json";       // replace your web project path
const FRONT_END_TRANSACTIONS_ADDRESS =
  "../frontbackend/src/constants/transactions-address.json";   // replace your web project path

```

3. `deploy smart to mumbai block chain`

```shell

hardhat deploy --network mumbai

```
