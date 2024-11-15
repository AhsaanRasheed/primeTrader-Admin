import styles from './style.module.css';

export default function Support() {
  const dummyData = [
    { id: 1, name: 'Wallet 1', balance: '$500' },
    { id: 2, name: 'Wallet 2', balance: '$300' },
    { id: 3, name: 'Wallet 3', balance: '$800' },
  ];

  return (
    <div className={styles.walletsContainer}>
      <h2>Support</h2>
      <table className={styles.walletsTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((wallet) => (
            <tr key={wallet.id}>
              <td>{wallet.id}</td>
              <td>{wallet.name}</td>
              <td>{wallet.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
