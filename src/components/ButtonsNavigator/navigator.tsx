import styles from './buttonNavigator.module.scss';

export function ButtonsNavigator() {

  function handleLeftClick(e:any){
    
  }
  function handleRightClick(e:any){
    
  }
  return (
    <div className={styles.buttons}>
      <button onClick={handleLeftClick}>{"<"} </button>
      <button onClick={handleRightClick}>{">"}</button>
    </div>
  );
}
