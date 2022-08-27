import styles from './styles/main.module.css';
import { Stocks } from './components/Stocks';
// import { Finance } from './pages/Finance';

export const App = () => {
  return (
    <div className={styles.container}>
      {/* <Finance /> */}
      <Stocks></Stocks>
    </div>
  );
};
