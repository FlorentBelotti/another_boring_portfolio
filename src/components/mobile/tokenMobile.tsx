import { useState, useEffect } from "react";
import styles from "./tokenMobile.module.scss";
import { useWeb3 } from "../../hooks/useWeb3";
import { NFT_CONTRACT_ADDRESS } from "../../contracts/NFTContract";

export default function TokenMobile() {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [metadataUri, setMetadataUri] = useState(
    "ipfs://bafkreidfsarcwuobdocbfbfeiflwbwkltnxdkh2jq6upswthwq5ahkj4c4",
  );
  const [status, setStatus] = useState("");
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const { account, isConnected, connectWallet, mintNFT, getTotalSupply } =
    useWeb3();

  useEffect(() => {
    if (isConnected) {
      loadTotalSupply();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  const loadTotalSupply = async () => {
    const supply = await getTotalSupply();
    setTotalSupply(supply);
  };

  const handleMint = async () => {
    if (!isConnected) {
      setStatus("Please connect your wallet first!");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    setIsLoading(true);
    setStatus("Minting in progress...");

    try {
      const receipt = await mintNFT(recipientAddress, metadataUri);
      setStatus(
        `✅ NFT minted successfully! Tx: ${receipt?.hash?.slice(0, 10) || "completed"}...`,
      );

      await loadTotalSupply();
      setRecipientAddress("");

      setTimeout(() => setStatus(""), 10000);
    } catch (error: unknown) {
      console.error("Minting error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setStatus(`❌ Error: ${errorMessage}`);
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const leftBlock = <div className={styles.block}></div>;

  const centerBlock = (
    <div className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>TOKENIZEART</h1>

        {!isConnected ? (
          <div className={styles.walletSection}>
            <p className={styles.walletPrompt}>
              Connect your wallet to mint NFTs
            </p>
            <button className={styles.connectButton} onClick={connectWallet}>
              Connect MetaMask
            </button>
          </div>
        ) : (
          <>
            <div className={styles.walletInfo}>
              <p>
                <span className={styles.label}>Connected:</span>{" "}
                {account.slice(0, 6)}...{account.slice(-4)}
              </p>
              <p>
                <span className={styles.label}>Total Minted:</span>{" "}
                {totalSupply}
              </p>
              <p className={styles.address}>
                <span className={styles.label}>Contract:</span>
                <span className={styles.contractAddress}>
                  {NFT_CONTRACT_ADDRESS.slice(0, 10)}...
                  {NFT_CONTRACT_ADDRESS.slice(-8)}
                </span>
              </p>
            </div>

            <div className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="recipient">Recipient Address</label>
                <input
                  id="recipient"
                  type="text"
                  placeholder="0x..."
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="uri">Metadata URI (IPFS)</label>
                <input
                  id="uri"
                  type="text"
                  placeholder="ipfs://..."
                  value={metadataUri}
                  onChange={(e) => setMetadataUri(e.target.value)}
                  className={styles.input}
                />
                <p className={styles.hint}>Default IPFS metadata provided</p>
              </div>

              <button
                className={styles.mintButton}
                onClick={handleMint}
                disabled={isLoading || !recipientAddress || !metadataUri}
              >
                {isLoading ? "MINTING..." : "MINT NFT"}
              </button>

              {status && <div className={styles.status}>{status}</div>}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const rightBlock = <div className={styles.block}></div>;

  return { leftBlock, centerBlock, rightBlock };
}
