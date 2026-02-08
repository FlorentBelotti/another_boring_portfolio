import { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";
import type { Eip1193Provider } from "ethers";
import {
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS,
} from "../contracts/NFTContract";

declare global {
  interface Window {
    ethereum?: Eip1193Provider & {
      isMetaMask?: boolean;
      request: (args: {
        method: string;
        params?: Array<unknown>;
      }) => Promise<unknown>;
      on?: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener?: (
        event: string,
        callback: (...args: unknown[]) => void,
      ) => void;
    };
  }
}

export function useWeb3() {
  const [account, setAccount] = useState<string>("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [chainId, setChainId] = useState<string>("");

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new BrowserProvider(window.ethereum);
      setProvider(web3Provider);

      // Vérifier si déjà connecté
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (Array.isArray(accounts) && accounts.length > 0) {
          setAccount(accounts[0] as string);
          setIsConnected(true);
          initContract(web3Provider);
        }
      });

      // Écouter les changements de compte
      window.ethereum.on?.("accountsChanged", (accounts: unknown) => {
        if (Array.isArray(accounts) && accounts.length > 0) {
          setAccount(accounts[0] as string);
          setIsConnected(true);
          initContract(web3Provider);
        } else {
          setAccount("");
          setIsConnected(false);
          setContract(null);
        }
      });

      // Écouter les changements de réseau
      window.ethereum.on?.("chainChanged", (newChainId: unknown) => {
        setChainId(newChainId as string);
        window.location.reload();
      });
    }
  }, []);

  const initContract = async (web3Provider: BrowserProvider) => {
    try {
      const signer = await web3Provider.getSigner();
      const nftContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_CONTRACT_ABI,
        signer,
      );
      setContract(nftContract);
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      setAccount(accounts[0]);
      setIsConnected(true);

      if (provider) {
        await initContract(provider);
      }

      const network = (await window.ethereum.request({
        method: "eth_chainId",
      })) as string;
      setChainId(network);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setAccount("");
    setIsConnected(false);
    setContract(null);
  };

  const mintNFT = async (to: string, uri: string) => {
    if (!contract) throw new Error("Contract not initialized");

    try {
      const tx = await contract.mint(to, uri);
      const receipt = await tx.wait();
      return receipt;
    } catch (error) {
      console.error("Error minting NFT:", error);
      throw error;
    }
  };

  const mintWithMetadata = async (
    to: string,
    name: string,
    imageIPFS: string,
  ) => {
    if (!contract) throw new Error("Contract not initialized");

    try {
      const tx = await contract.mintWithOnChainMetadata(to, name, imageIPFS);
      const receipt = await tx.wait();
      return receipt;
    } catch (error) {
      console.error("Error minting NFT with metadata:", error);
      throw error;
    }
  };

  const getTotalSupply = async () => {
    if (!contract) return 0;

    try {
      const supply = await contract.totalSupply();
      return Number(supply);
    } catch (error) {
      console.error("Error getting total supply:", error);
      return 0;
    }
  };

  return {
    account,
    isConnected,
    chainId,
    connectWallet,
    disconnectWallet,
    mintNFT,
    mintWithMetadata,
    getTotalSupply,
    contract,
  };
}
