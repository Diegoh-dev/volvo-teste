import Link from 'next/link';
import styles from './links.module.scss';
import { Chevron } from '../Chevron/chevron';

interface LinksProps{
  id:string;
}

export function Links({id}:LinksProps){
  return(
    <div 
    className={styles.containerLinks}
    >
      <Link href={`/cars/learn/${id}`}>
        Conheça <Chevron/>
      </Link>
      <Link href='/cars/learn'>
        Comprar <Chevron/>
      </Link>

    </div>
  )
}