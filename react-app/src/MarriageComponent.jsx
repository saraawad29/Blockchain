import React, { useState } from 'react';
import getWeb3 from './web3';
import Marriage from '../../build/contracts/Marriage.json';

const MarriageComponent = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [message, setMessage] = useState('');

  const init = async () => {
    try {
      const web3Instance = await getWeb3();
      const networkId = await web3Instance.eth.net.getId();
      const deployedNetwork = Marriage.networks[networkId];
      const contractInstance = new web3Instance.eth.Contract(
        Marriage.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setWeb3(web3Instance);
      setContract(contractInstance);
    } catch (error) {
      console.error(error);
    }
  };

  const createMarriage = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.createMarriage(accounts[0], accounts[1]).send({ from: accounts[0] });
      setMessage('Félicitations !');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDivorce = async () => {
    try {
      await contract.methods.divorce().send();
      setMessage('Divorce accordé');
    } catch (error) {
      console.error(error);
    }
  };

  if (!web3) {
    init();
  }

  return (
    <div>
      <button onClick={createMarriage}>Créer un mariage</button>
      <button onClick={handleDivorce}>Demander le divorce</button>
      <p>{message}</p>
    </div>
  );
};

export default MarriageComponent;
