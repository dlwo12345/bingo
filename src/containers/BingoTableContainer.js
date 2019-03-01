import BingoTable from '../components/BingoTable';
import * as actions from '../actions';
import { connect } from 'react-redux';

// store 안의 state 값을 props로 연결
const mapStateToProps = state => ({
    playName: state.playName,
    cells: state.cells
});


const mapDispatchToProps = dispatch => ({
    onSelect: (rowIndex, index) => dispatch(actions.increment(rowIndex, index)),
});

const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BingoTable);

export default CounterListContainer;