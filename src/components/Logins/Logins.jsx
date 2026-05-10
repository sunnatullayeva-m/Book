import styles from '../Logins/Logins.module.scss'

function Logins({ image, title, dishes, notes }) {
    return (



        <div className={styles.container}>

            <div className={styles.card}>

                <div className={styles.img}>
                    <img src={image} />
                </div>

                <div className="texts">

                    <h1 className={styles.title}>
                        {title}
                    </h1>

                    <p className={styles.dishes}>
                        {dishes}
                    </p>

                    <h3 className={styles.notes}>
                        {notes}
                    </h3>

                </div>



            </div>

        </div>




    )
}

export default Logins;