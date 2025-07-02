import styles from "./Header.module.css";

export default function Header({ resetFnc }) {
    return (
        <div className={styles.header}>
            <h1 className={styles.titleText} onClick={resetFnc}>
                D<sup>e</sup>NSITY C<sup>a</sup>LCULATOR
            </h1>
        </div>
    );
}
