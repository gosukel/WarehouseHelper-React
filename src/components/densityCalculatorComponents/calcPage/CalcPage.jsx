import { useState } from "react";
import styles from "./CalcPage.module.css";
import Header from "../header/Header";
import CalcArea from "../calcArea/CalcArea";

export default function CalcPage() {
    const [skids, setSkids] = useState([]);

    function addSkid() {
        const newPallet = {
            id: skids.length + 1,
            weight: 0,
            length: 0,
            width: 0,
            height: 0,
            calc: false,
            density: null,
            densityName: "density",
        };
        setSkids((items) => [...items, newPallet]);
    }

    function resetPage() {
        setSkids([]);
    }

    function calcSkids() {
        const calcedSkids = skids.map((skid) => {
            if (
                skid.weight <= 0 ||
                skid.length <= 0 ||
                skid.width <= 0 ||
                skid.height <= 0
            ) {
                return skid;
            } else {
                let density =
                    skid.weight /
                    ((skid.length * skid.width * skid.height) / 1728);
                let newSkid = {
                    ...skid,
                    calc: true,
                    density: density.toFixed(),
                    densityName: `density active ${
                        density >= 10
                            ? "maxDense"
                            : density >= 6
                            ? "medDense"
                            : "minDense"
                    }`,
                };
                return newSkid;
            }
        });
        setSkids(calcedSkids);
        return;
    }

    function updateSkid(skid) {
        let newSkids = skids.map((s) => {
            if (s.id === skid.id) {
                return skid;
            } else {
                return s;
            }
        });
        setSkids(newSkids);
    }

    const passProps = { skids, calcSkids, addSkid, updateSkid };

    return (
        <>
            <Header resetFnc={resetPage} />
            <CalcArea props={passProps} />
        </>
    );
}
