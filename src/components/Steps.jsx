import React, { useState } from 'react';
import steps from "../static/steps";
import "../static/styles/Steps.css";

const Steps = () => {

  return (
    <div className='steps'>
      <h3 className='title'>Guided Walthrough</h3>
          <div className='tutorial'>
              <ol>
                  <li>Open your Metamask wallet & change your Network from Ethereum Mainnet to Polygon Testnet
                      <ul className='sublist'>
                          <li>
                              To add the Polygon Testnet to your list of networks go to this link and scroll down to find the button <a href='https://mumbai.polygonscan.com/address/0xd332f54a0b97b43522c52cb2cfc66760b359a750' target="_blank" rel="noopener noreferrer">Add Mumbai Network</a>
                          </li>
                          <li>If you don't have Metamask, get it from here 👉 <a href='https://metamask.io/download/' target="_blank" rel="noopener noreferrer">Metamask</a></li>
                      </ul>
                  </li>
                  <li>
                  Get free test MATIC tokens from here 👉 <a href="https://faucet.polygon.technology/" target="_blank" rel="noopener noreferrer">Polygon Faucet</a> 
                  </li>
                  {steps.map((step, index) => 
                      <li key={index}>{step}</li>
                  )}
              </ol>
          </div>
  </div>);
};

export default Steps;
