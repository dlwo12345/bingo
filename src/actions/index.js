import * as types from './ActionTypes';

export const select = ({ index }) => ({
    type: types.SELECT,
    index
})
