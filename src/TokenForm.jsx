import "./TokenForm.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ethers } from "ethers";
import Token from "./artifacts/contracts/Token.sol/Token.json";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

const initialValues = {
  name: "",
  symbol: "",
  totalSupply: 0,
  decimals: 18,
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Token name is required";
  }
  if (!values.symbol) {
    errors.symbol = "Token symbol is required";
  }
  if (values.totalSupply <= 0) {
    errors.totalSupply = "Total supply must be greater than 0";
  }
  if (values.decimals < 0) {
    errors.decimals = "Invalid number of decimals";
  }
  return errors;
};

const TokenForm = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [copied, setCopied] = useState(false);

  const deployToken = async (name, symbol, totalSupply, decimals) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        await ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tokenFactory = new ethers.ContractFactory(
          Token.abi,
          Token.bytecode,
          signer
        );
        const token = await tokenFactory.deploy(
          name,
          symbol,
          totalSupply,
          decimals
        );
        await token.deployed();
        setContractAddress(token.address);
        console.log("Token contract deployed to:", token.address);
      } else {
        console.log("Ethereum object doesn't exist!");
        alert("Get Metamask");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, actions) => {
      console.log("Values:", values);
      await deployToken(
        values.name,
        values.symbol,
        values.totalSupply,
        values.decimals
      );
      formik.resetForm();
    },
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <legend>Create your own ERC-20 token</legend>
          <div className="form-grid">
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ethereum"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label htmlFor="symbol">Symbol</label>
              <input
                type="text"
                id="symbol"
                name="symbol"
                placeholder="ETH"
                onChange={formik.handleChange}
                value={formik.values.symbol}
              />
              {formik.errors.symbol ? (
                <div className="error">{formik.errors.symbol}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label htmlFor="totalSupply">Total Supply</label>
              <input
                type="number"
                id="totalSupply"
                name="totalSupply"
                onChange={formik.handleChange}
                value={formik.values.totalSupply}
              />
              {formik.errors.totalSupply ? (
                <div className="error">{formik.errors.totalSupply}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label htmlFor="decimals">
                Decimals {""}
                <span className="default">
                  (ERC20 tokens default to 18 decimals)
                </span>
              </label>
              <input
                type="number"
                id="decimals"
                name="decimals"
                min="0"
                max="18"
                onChange={formik.handleChange}
                value={formik.values.decimals}
              />
              {formik.errors.decimals ? (
                <div className="error">{formik.errors.decimals}</div>
              ) : null}
            </div>
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Create Token
          </button>
        </fieldset>
      </form>
      {contractAddress != "" && (
        <div className="contract">
          <h3>Token Contract Address - </h3>
          <p>
            <span className="contract-address">{contractAddress}</span>
            <span className="copy-btn">
              <CopyToClipboard
                text={contractAddress} 
                onCopy={() => setCopied(true)}><button>📋</button></CopyToClipboard>
            </span>
          {copied && (<span className="copied-btn">✅</span>)}
          </p>
        </div>
        )}
    </div>
  );
};

export default TokenForm;
