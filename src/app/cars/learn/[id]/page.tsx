import Image from "next/image";
import styles from "./learn.module.scss";

interface LearnProps {
  params: {
    id: string;
  };
  imageUrl: string;
}

export default function Learn({ params, imageUrl }: LearnProps) {
  const { id } = params;
  console.log("imageUrl", imageUrl);
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

      <section style={{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        gap:'2rem',
        }}>
        <div style={{
          marginTop:'1.5rem',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          gap:'.5rem',
        }}>
          <h3 style={{
            textTransform:'uppercase',
          }}>
          <strong>{id}</strong>.
          </h3>
          <h2>
             Excelente desempenho elétrico num
            formato compacto.
          </h2>
        </div>

        <article style={{
          display:'flex',
          width:'100%',
          alignItems:'center',
          justifyContent:'space-around',
          // gap:'2rem',
          flexWrap:'wrap',
          marginBottom:'2rem',
        }}>
          <div style={{
            maxWidth:'150px',

          }}>
            <h4  style={{
              fontSize:'40px',
            }}>480km</h4>
            <p style={{
              color:'rgba(0, 0, 0, 0.64)'
            }}>
              Autonomia elétrica <br />
              (Até)
            </p>
          </div>

          <div style={{
            maxWidth:'180px',
            marginTop:'1rem',
            
          }}>
            <h4  style={{
              fontSize:'40px',
              whiteSpace:'nowrap',
            }}>Cerca de 30min</h4>
            <p style={{
              color:'rgba(0, 0, 0, 0.64)'
            }}>Estimativa de tempo do carregamento rápido  DC (10%-80%)</p>
          </div>
          <div style={{
            maxWidth:'150px',
            
          }}>
            <h4  style={{
              fontSize:'40px',
            }}>15.7kWh</h4>
            <p style={{
              color:'rgba(0, 0, 0, 0.64)'
            }}>Consumo de energia (por 100km)</p>
          </div>
          <div style={{
            maxWidth:'150px',
            
          }}>
            <h4  style={{
              fontSize:'40px',
            }}>5.3s</h4>
            <p style={{
              color:'rgba(0, 0, 0, 0.64)'
            }}>Aceleração (0-100 km/h)</p>
          </div>
        </article>
      </section>
    </div>
  );
}