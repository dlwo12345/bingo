import React, { Component } from 'react';
import BingoTable from '../components/BingoTable';
import getRandomArray from '../lib/getRandomArray'

import { connect } from 'react-redux';

class App extends Component {

    render() {
        const { playName, cells } = this.props;
        return (
            <div>
                <button>재시작</button>

                <div>
                    <BingoTable
                        playName={playName}
                        cells={cells}
                    />
                    {/* <BingoTable
                        playName={playName}
                        cells={cells}
                    /> */}
                </div>
            </div>
        );
    }
}

// store 안의 state 값을 props로 연결
const mapStateToProps = state => ({
    playName: state.playName,
    cells: state.cells
});

export default connect(mapStateToProps)(App);