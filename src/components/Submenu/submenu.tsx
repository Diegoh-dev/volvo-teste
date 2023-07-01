import styles from "./submenu.module.scss";

export function SubMenu({ listCars, setListCars }: any) {
  console.log("listCars:", listCars);

  async function filterTypeCar(type?: string) {
    const response = await fetch("api/cars.json");
    const data = await response.json();

    if (type) {
      const filterCar = data.filter((car: any) => {
        return car.bodyType === type;
      });
      setListCars(filterCar);
      console.log("filterCar:", filterCar);
    } else {
      setListCars(data);
    }
  }

  return (
    <section className={styles.containerSubmenu}>
      {/* colocar um filtro em algum lugar */}
      <h1>Todos os modelos Recharge</h1>

      <div className={styles.filterButtons}>
        <button onClick={() => filterTypeCar()} className={styles.button}>
          Todos{" "}
        </button>
        <button onClick={() => filterTypeCar("suv")} className={styles.button}>
          SUV{" "}
        </button>
        <button
          onClick={() => filterTypeCar("estate")}
          className={styles.button}
        >
          Estate{" "}
        </button>
        <button
          onClick={() => filterTypeCar("sedan")}
          className={styles.button}
        >
          Sedan{" "}
        </button>
      </div>
    </section>
  );
}
