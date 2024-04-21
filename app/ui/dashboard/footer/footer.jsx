import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>King Crimson</div>  
            <div className={styles.text}>Road to senior developer</div>
        </div>
    );
}

export default Footer;