import styles from "./Button.module.css";

export default function Button({ onClick, text, styleClass }) {
    return (
        <button onClick={onClick} className={styles[styleClass]}>
            {text}
        </button>
    );
}
