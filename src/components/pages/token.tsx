import { useState, useEffect } from "react";
import styles from "./token.module.scss";
import { useWeb3 } from "../../hooks/useWeb3";
import { NFT_CONTRACT_ADDRESS } from "../../contracts/NFTContract";

export default function Token() {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [metadataUri, setMetadataUri] = useState(
    "ipfs://bafybeih6gu7caabyc4nzkz72tfsn4v7s5mupkk5ffrl3rhyuvjks55knq4",
  );
  const [name, setName] = useState("42 Art by fbelotti");
  const [imageIPFS, setImageIPFS] = useState(
    "bafybeih6gu7caabyc4nzkz72tfsn4v7s5mupkk5ffrl3rhyuvjks55knq4",
  );
  const [mintType, setMintType] = useState<"uri" | "metadata">("uri");
  const [status, setStatus] = useState("");
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const {
    account,
    isConnected,
    connectWallet,
    mintNFT,
    mintWithMetadata,
    getTotalSupply,
  } = useWeb3();

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
      if (mintType === "uri") {
        const receipt = await mintNFT(recipientAddress, metadataUri);
        setStatus(
          `✅ NFT minted successfully! Transaction: ${receipt?.hash || "completed"}`,
        );
      } else {
        const receipt = await mintWithMetadata(
          recipientAddress,
          name,
          imageIPFS,
        );
        setStatus(
          `✅ NFT minted successfully! Transaction: ${receipt?.hash || "completed"}`,
        );
      }

      // Recharger le total supply
      await loadTotalSupply();

      // Réinitialiser le formulaire
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
      <div className={styles.mintContainer}>
        <h1 className={styles.mainTitle}>MINT NFT</h1>

        {/* Wallet Connection */}
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
              <p className={styles.walletConnected}>
                <span className={styles.label}>Connected:</span>
                {account.slice(0, 6)}...{account.slice(-4)}
              </p>
              <p className={styles.supplyInfo}>
                <span className={styles.label}>Total Minted:</span>{" "}
                {totalSupply}
              </p>
              <p className={styles.contractInfo}>
                <span className={styles.label}>Contract:</span>
                {NFT_CONTRACT_ADDRESS.slice(0, 6)}...
                {NFT_CONTRACT_ADDRESS.slice(-4)}
              </p>
            </div>

            <div className={styles.typeSelector}>
              <button
                className={`${styles.typeButton} ${mintType === "uri" ? styles.active : ""}`}
                onClick={() => setMintType("uri")}
              >
                Mint with URI
              </button>
              <button
                className={`${styles.typeButton} ${mintType === "metadata" ? styles.active : ""}`}
                onClick={() => setMintType("metadata")}
              >
                Mint with Metadata
              </button>
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

              {mintType === "uri" ? (
                <div className={styles.inputGroup}>
                  <label htmlFor="uri">Metadata URI</label>
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
              ) : (
                <>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">NFT Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="42 Art by fbelotti"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="ipfs">Image IPFS Hash</label>
                    <input
                      id="ipfs"
                      type="text"
                      placeholder="bafybeih..."
                      value={imageIPFS}
                      onChange={(e) => setImageIPFS(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </>
              )}

              <button
                className={styles.mintButton}
                onClick={handleMint}
                disabled={
                  isLoading ||
                  !recipientAddress ||
                  (mintType === "uri" ? !metadataUri : !name || !imageIPFS)
                }
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
