import styles from './learn.module.scss';

interface LearnProps {
  params: {
    id: string;
  };
}

export default function Learn({ params }: LearnProps) {
  const { id } = params;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.list}>
            <li>
              <strong>{id}</strong>
            </li>
            <li>
              Descrição geral
            </li>
            <li>
              Interior
            </li>
            <li>
              Características
            </li>
          </ul>
        </nav>
      
          <button className={styles.buttonInfo}>
            MANTENHA-ME INFORMADO
          </button>
      </header>
    </div>
  );
}
