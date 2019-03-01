import React from 'react';
import './Cell.css'

const Cell = ({ tds, rowIndex, onSelect }) => {
    const tdList = tds.map(
        (v, i) => (
            <td
                className="bingo-td"
                key={i}
                onClick={() => onSelect(rowIndex, i)}
            >
                {v}
            </td>
        )
    );
    return (
        <tr>
            {tdList}
        </tr>
    )
}

Cell.defaultProps = {
    tds: [0, 0, 0, 0, 0],
    onSelect: () => console.warn('onSelect not defined'),
}

export default Cell;