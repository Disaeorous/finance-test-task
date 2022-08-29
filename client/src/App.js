import styles from './styles/main.module.css';
import { FinancePage } from './pages/Finance';

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <FinancePage />
      </div>
    </div>
  );
};
