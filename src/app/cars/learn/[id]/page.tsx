import Image from 'next/image';
import styles from './learn.module.scss';

interface LearnProps {
  params: {
    id: string;
  };
  imageUrl:string;
}

export default function Learn({ params ,imageUrl}: LearnProps) {
  const { id } = params;
  console.log('imageUrl',imageUrl)
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.list}>
            <li>
              <strong>{id}</strong>
            </li>
            <li>Descrição geral</li>
            <li>Interior</li>
            <li>Características</li>
          </ul>
        </nav>

        <button className={styles.buttonInfo}>MANTENHA-ME INFORMADO</button>
      </header>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          objectFit: "contain",
        }}
      >
        <Image
          width={500}
          height={500}
          src="/images/xc90_recharge.jpg"
          alt={id}
        />
      </section>

      <section>
        <div>
          <h2>
            {" "}
            <strong>{id}</strong>. Excelente desempenho <br /> elétrico num
            formato compacto.
          </h2>
        </div>

        <article>
          <div>
            <h4>480km</h4>
            <p>
              Autonomia elétrica <br />
              (Até)
            </p>
          </div>

          <div>
            <h4>Cerca de 30min</h4>
            <p>
              
Estimativa de tempo do carregamento rápido DC

(10%-80%)
            </p>
          </div>
          <div>
            <h4>15.7kWh</h4>
            <p>
              
Consumo de energia

(por 100km)
            </p>
          </div>
          <div>
            <h4>5.3s</h4>
            <p>
            Aceleração

(0-100 km/h)
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
