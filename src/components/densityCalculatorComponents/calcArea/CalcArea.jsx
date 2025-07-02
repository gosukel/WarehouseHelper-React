import styles from "./CalcArea.module.css";
import Buttons from "../buttons/Buttons";
import PalletItem from "../palletItem/PalletItem";

export default function CalcArea({ props }) {
    const { skids, calcSkids, addSkid, updateSkid } = props;

    return (
        <div className={styles.calcContainer}>
            <Buttons add={addSkid} calc={calcSkids} />
            <div className={styles.skidContainer}>
                {skids.length > 0 && (
                    <div className={styles.labelContainer}>
                        <p>WEIGHT</p>
                        <p>LENGTH</p>
                        <p>WIDTH</p>
                        <p>HEIGHT</p>
                    </div>
                )}
                {skids.map((skid) => {
                    return (
                        <PalletItem
                            skid={skid}
                            key={skid.id}
                            updateSkid={updateSkid}
                        />
                    );
                })}
            </div>
        </div>
    );
}
