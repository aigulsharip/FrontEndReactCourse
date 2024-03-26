import Counter from './Counter';
import classes from './main.module.css'
function MainComponent () {
    const title = "title";
    
    return (
        <>    

         <main className={classes.header}>Main</main>
        <h2>{title}</h2>

        <Counter></Counter>
        </>
    )
    
}

export default MainComponent;