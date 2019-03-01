import React, { Component } from 'react';
import BingoTable from '../components/BingoTable';
import getRandomArray from '../lib/getRandomArray'
class App extends Component {

    render() {
        return (
            <div>
                <button>재시작</button>

                <div>
                    <BingoTable
                        playName="1p"
                        cells={getRandomArray()}
                    />
                    <BingoTable
                        playName="2p"
                        cells={getRandomArray()}
                    />
                </div>
            </div>
        );
    }
}

export default App;