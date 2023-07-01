import Link from 'next/link';
import styles from './links.module.scss';
import { Chevron } from '../Chevron/chevron';

export function Links(){
  return(
    <div 
    className={styles.containerLinks}
    >
      <Link href='/'>
        Conheça <Chevron/>
      </Link>
      <Link href='/'>
        Comprar <Chevron/>
      </Link>

    </div>
  )
}