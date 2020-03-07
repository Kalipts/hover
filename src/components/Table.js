import React, {useState} from "react";
import './Style.css';

export default function Table() {
    const [cell, setCell] = useState([]);
    let div = [];

    let selecting, start, end;

    let beginSelection = i => {
        selecting = true;
        start = i;
        updateSelection(i);
    };

    let endSelection = (i = end) => {
        selecting = false;
        updateSelection(i);
    };

    let updateSelection = i => {
        if (selecting)
            end = i;
        [...document.querySelectorAll('span')].forEach((span, i) =>
            span.classList.toggle('selected', i >= start && i <= end || i >= end && i <= start));
    };



    for(let i = 0; i < 31; i++) {
        let a = <span key={i} onMouseDown={()=>beginSelection(i)} onMouseUp={()=>endSelection(i)} onMouseMove={()=>updateSelection(i)}>{i}</span>;

        div.push(a);
        cell.push(a);
    }


    return div;
}


