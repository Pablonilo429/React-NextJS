import Subdivisao from '@/components/Subsdivisao';
import styles from '../styles/Home.module.css'
import Linha from '@/components/Linha';
import Tabuleiro from '@/components/Tabuleiro';


export default function Home() {
  return (
    <div className={styles.main}>
    
      <Tabuleiro></Tabuleiro>
        
    </div>   
    
  );
}
