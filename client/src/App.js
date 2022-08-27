<<<<<<< HEAD
import styles from './styles/main.module.css';
import { Stocks } from './components/Stocks';
// import { Finance } from './pages/Finance';

export const App = () => {
  return (
    <div className={styles.container}>
      {/* <Finance /> */}
      <Stocks></Stocks>
=======
import { Finance } from './pages/Finance';

export const App = () => {
  return (
    <div>
      <Finance />
>>>>>>> 399e79fb0e7eff180c2643e890e6943f55a1013e
    </div>
  );
};
