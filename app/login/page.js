'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login / Signup</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.formInput}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.formInput}
        />
        <button type="submit" className={styles.signInButton}>Sign In</button>
      </form>
    </div>
  );
}

