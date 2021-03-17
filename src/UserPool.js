import { CognitoUserPool } from "amazon-cognito-identity-js";

//PoolData provides the information from the AWS cognito Pool. 

const poolData = {
  UserPoolId: "eu-west-1_a6Z6hPgM0",
  ClientId: "7osp2h8fs50p8cf3e2hhflqos5",
};
export default  new CognitoUserPool(poolData);