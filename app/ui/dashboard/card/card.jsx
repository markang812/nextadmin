import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"

const Card = () => {
    return (
        <div className={styles.container}>
        <MdSupervisedUserCircle />
        <div className={styles.texts}>
            <span className={styles.title}>Total Users</span>
            <span className={styles.number}>69</span>
            <span className={styles.detail}>
                <span className={styles.positive}>69%</span> more than the previous day!
            </span>
        </div>
        </div>
    );
}

export default Card;