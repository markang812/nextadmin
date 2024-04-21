import { MdPlayCircleFilled } from "react-icons/md"
import styles from "./rightbar.module.css"
import Image from "next/image";
const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className="notification">Available Now</span>
                    <h3 className={styles.title}>Watch No Game No Life Season 2</h3>
                    <span className={styles.subtitle}>Watch it on Netflix on January 2050</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ullam doloribus ut suscipit nesciunt, amet accusamus exercitationem optio aliquid molestiae commodi incidunt earum velit, voluptate eligendi magnam unde atque temporibus?
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;