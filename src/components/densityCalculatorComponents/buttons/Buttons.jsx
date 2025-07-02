import styles from "./Buttons.module.css";
import Button from "../button/Button";

export default function Buttons({ add, calc }) {
    return (
        <div className={styles.btnContainer}>
            <Button onClick={add} text="+ Pallet" styleClass="addPalletBtn" />
            <Button onClick={calc} text="Calculate" styleClass="calcBtn" />
        </div>
    );
}
