import * as types from '../actions/ActionTypes';
import getRandomArray from '../lib/getRandomArray'

// 초기 상태 정의
const initialState = {
    playName: '1p',
    cells: getRandomArray()
}

const bingoTable = (state = initialState, action) => {
    const { cells, playName } = state;

    switch (action.type) {
        case types.SELECT:
            return {
                ...cells,
                playName
            }
        default:
            return state;
    }

}
export default bingoTable;