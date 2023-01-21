import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../../components/Header";
import { useMoralis } from "react-moralis";
import Footer from "../../components/Footer";

const supportedChains = ["31337", "5"];

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Decentralized Donations App</title>
        <meta name="description" content="Our Decentralized Donations App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row"></div>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
      <Footer />
    </div>
  );
}
