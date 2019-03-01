import React from 'react';
import './Cell.css'

const Cell = ({ tds, index }) => {
    const tdList = tds.map(
        (v, i) => (
            <td
                className="bingo-td"
                key={i}
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
    tds: [1, 2, 3, 4, 5]
}

export default Cell;