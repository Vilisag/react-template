import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Board from '../presentational/Board.jsx';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/** status */}</div>
                    <div>{/** TODO */}</div>
                </div>
            </div>
        );
    }
}

export default Game;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Game />, wrapper) : false;