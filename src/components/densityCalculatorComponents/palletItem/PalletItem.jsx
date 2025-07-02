import styles from "./PalletItem.module.css";

export default function PalletItem({ skid, updateSkid }) {
    console.log(skid);
    let densityClass = styles.density;
    if (skid.calc) {
        densityClass += ` ${styles.active}`;
        if (skid.density >= 10) densityClass += ` ${styles.maxDense}`;
        else if (skid.density >= 6) densityClass += ` ${styles.medDense}`;
        else densityClass += ` ${styles.minDense}`;
    }
    return (
        <div className={styles.skid}>
            <div className={densityClass}>{skid.density}</div>
            <div
                className={`${styles.skidDetails} ${
                    skid.calc ? styles.slide : ""
                }`}
            >
                <div className={styles.weightDiv}>
                    <input
                        type="number"
                        value={skid.weight}
                        onChange={(e) => {
                            updateSkid({ ...skid, weight: e.target.value });
                        }}
                    />
                    <span>lbs</span>
                </div>
                <div className={styles.lengthDiv}>
                    <input
                        type="number"
                        value={skid.length}
                        onChange={(e) => {
                            updateSkid({ ...skid, length: e.target.value });
                        }}
                    />
                    <span>in.</span>
                </div>
                <div className={styles.widthDiv}>
                    <input
                        type="number"
                        value={skid.width}
                        onChange={(e) => {
                            updateSkid({ ...skid, width: e.target.value });
                        }}
                    />
                    <span>in.</span>
                </div>
                <div className={styles.heightDiv}>
                    <input
                        type="number"
                        value={skid.height}
                        onChange={(e) => {
                            updateSkid({ ...skid, height: e.target.value });
                        }}
                    />
                    <span>in.</span>
                </div>
            </div>
        </div>
    );
}
