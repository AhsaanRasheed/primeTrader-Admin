// components/Layout.js
"use client";
import { useState } from "react";
import styles from "./Layout.module.css";
import Contracts from "../contracts/page";
import Support from "../support/page";
import Wallets from "../wallets/page";

export default function Layout({ children }) {
  const [activeSection, setActiveSection] = useState("wallets");

  const renderContent = () => {
    switch (activeSection) {
      case "wallets":
        return <Wallets />;
      case "contracts":
        return <Contracts />;
      case "support":
        return <Support />;
      default:
        return <Wallets />;
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Prime Trader Admin</h2>
        <button
          onClick={() => setActiveSection("walltes")}
          className={activeSection === "wallets" ? styles.active : ""}
        >
          Wallets
        </button>
        <button
          onClick={() => setActiveSection("contracts")}
          className={activeSection === "contracts" ? styles.active : ""}
        >
          Contracts
        </button>
        <button
          onClick={() => setActiveSection("support")}
          className={activeSection === "support" ? styles.active : ""}
        >
          Support
        </button>
      </aside>
      <main className={styles.content}>{renderContent()}</main>
    </div>
  );
}
