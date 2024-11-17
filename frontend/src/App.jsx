import { useState, useEffect } from 'react'
import abi from './contractJSON/gift.json'
import './App.css'
import { ethers } from 'ethers'
import Buy from './Components/Buy'
import Memos from './Components/Memos'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  })
  const [account, setAccount] = useState('Not connected')

  useEffect(() => {
    const template = async () => {
      try {
        const contractAddress = '0x81969672341eD4835e480E1531A5092D9D59B2c6';
        const contractABI = abi.abi;
        const { ethereum } = window;
        const account = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        window.ethereum.on('accountsChanged', function () {
          window.location.reload();
        })
        setAccount(account);
        console.log(account);
        const providers = new ethers.BrowserProvider(window.ethereum); // Read only
        const signers = await providers.getSigner(); // Read and write
        const contract = new ethers.Contract(contractAddress, contractABI, signers);
        setState({
          provider: providers,
          signer: signers,
          contract: contract
        });
        console.log(contract);
      } catch (error) {
        console.error("Error connecting to Ethereum", error);
      }
    };
    template();
  }, [])
  return (
    <>
      <img src="https://i.imgur.com/y6BBAuW.jpeg" className="img-fluid" alt=".." width="100%" />
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>

      <Buy state={state}>

      </Buy>
      <Memos state={state}></Memos>
    </>
  )
}

export default App
