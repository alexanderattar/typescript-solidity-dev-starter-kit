import { ethers } from 'hardhat';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Log__factory, Log } from '../typechain';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('Log', () => {
  let logger: Log;

  beforeEach(async () => {
    // 1
    const signers = await ethers.getSigners();

    // 2
    const logFactory = (await ethers.getContractFactory(
      'Log',
      signers[0]
    )) as Log__factory;
    logger = await logFactory.deploy();
    await logger.deployed();
  });

  // 4
  describe('log something', async () => {
    it('logs', async () => {
      let hash = await logger.getHash();
      console.log(hash);
    });
  });
});
