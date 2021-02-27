import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/w-reis.png" alt="Wellinton Reis"/>
      <div>
        <strong>Wellinton Reis</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}