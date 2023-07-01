import styles from './info.module.scss';

interface InfoProps{
  bodyType:string;
  modelName:string;
}

export function Info({bodyType,modelName}:InfoProps){
  return (
    <div className={styles.containerInfo}>
      <span className={styles.type}>{bodyType}</span>

      <div className={styles.content}>
        <strong>{modelName}</strong>
        <p>100% elétrico</p>
      </div>

      <p className={styles.price}>A partir de <span>R$ 549.950</span> </p>
    </div>
  );
}