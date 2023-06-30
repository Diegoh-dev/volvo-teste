import styles from "./submenu.module.scss";

export function SubMenu() {
  return (
    <section className={styles.containerSubmenu}>
      {/* colocar um filtro em algum lugar */}
      <h1>Todos os modelos Recharge</h1>

      <div className={styles.filterButtons}>
        <button className={styles.button}>Todos (6)</button>
        <button className={styles.button}>SUV (5)</button>
        <button className={styles.button}>Crossover (1)</button>
      </div>
    </section>
  );
}
