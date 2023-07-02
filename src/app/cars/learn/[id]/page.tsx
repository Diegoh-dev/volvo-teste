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
      {/* Next 13 {id} */}
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
        <div>
          <button>
            MANTENHA-ME INFORMADO
          </button>
        </div>
      </header>
    </div>
  );
}
