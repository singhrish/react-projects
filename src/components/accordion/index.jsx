import { useState } from "react";
import data from "./data";
import './styles.css';

//Single Selection
export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId);
        if (getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexofCurrId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexofCurrId);
        if (findIndexofCurrId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexofCurrId, 1)

        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">
                                <div onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.idd)
                                        : () => handleSingleSelection(dataItem.idd)
                                }
                                    className="title">
                                    <h3>{dataItem.name}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(dataItem.idd) !== -1 &&
                                        <div className="content">{dataItem.proffession}</div> :
                                        selected === dataItem.idd && <div className="content">{dataItem.proffession}</div>
                                }
                                {/* {
                            selected == dataItem.idd || multiple.indexOf(dataItem.idd !== -1)? 
                            <div className="content">{dataItem.proffession}</div>
                            :null
                        } */}
                            </div>
                        ))
                    ) : (
                        <div>No Data Found</div>
                    )}
            </div>
        </div>
    );
}
