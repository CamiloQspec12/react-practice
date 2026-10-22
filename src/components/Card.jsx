import styles from './Card.module.css'


console.log(styles)

function Card({children}) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}


export default Card