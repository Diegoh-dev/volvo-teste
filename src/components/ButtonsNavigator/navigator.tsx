import styles from './buttonNavigator.module.scss';

interface ButtonsNavigatorProps{
  carousel:any;
}

export function ButtonsNavigator({carousel}:ButtonsNavigatorProps) {

  function handleLeftClick(e:any){
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
  function handleRightClick(e:any){
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }
  return (
    <div className={styles.buttons}>
      <button onClick={handleLeftClick}>{"<"} </button>
      <button onClick={handleRightClick}>{">"}</button>
    </div>
  );
}
