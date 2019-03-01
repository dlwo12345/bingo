import React from 'react';
import './BingoTable.css';
import Cell from './Cell';

const BingoTable = ({ playName, cells }) => {
    const cellList = cells.map(
        (v, i) => (
            <Cell
                key={i}
                tds={v}
            />
        )
    )

    return (
        <div className="bingo-wrap">
            <h1>{playName}</h1>
            <table className="bingo-table">
                <tbody>
                    {cellList}
                </tbody>
            </table>
        </div >
    )
}

BingoTable.defaultProps = {
    playName: '1p',
    cells: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
}

export default BingoTable;