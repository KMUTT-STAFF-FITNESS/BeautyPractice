import React from 'react'

export default class PapaerRockSissor extends React.Component {
    state = {
        player: '',
        bot: '',
        weapon: [
            { name: 'paper', },
            { name: 'rock', },
            { name: 'sissor', },
        ],
        result: ''

    }

    handleGame = () => {
        let min = 0;
        let max = 3;
        let randPlayer = parseInt(min + (Math.random() * (max - min)))
        let randBot = parseInt(min + (Math.random() * (max - min)))
        console.log(randPlayer, randBot)
        if (randPlayer === 0) {
            if (randBot === 0) {
                this.setState({
                    player: 'paper',
                    bot: 'paper',
                    result: 'draw'
                })
            } else if (randBot === 1) {
                this.setState({
                    player: 'paper',
                    bot: 'rock',
                    result: 'win'
                })
            } else {
                this.setState({
                    player: 'paper',
                    bot: 'sissor',
                    result: 'lose'
                })
            }
        } else if (randPlayer === 1) {
            if (randBot === 0) {
                this.setState({
                    player: 'rock',
                    bot: 'paper',
                    result: 'lose'
                })
            } else if (randBot === 1) {
                this.setState({
                    player: 'rock',
                    bot: 'rock',
                    result: 'draw'
                })
            } else {
                this.setState({
                    player: 'rock',
                    bot: 'sissor',
                    result: 'win'
                })
            }
        }else {
            if (randBot === 0) {
                this.setState({
                    player: 'sissor',
                    bot: 'paper',
                    result: 'win'
                })
            } else if (randBot === 1) {
                this.setState({
                    player: 'sissor',
                    bot: 'rock',
                    result: 'lose'
                })
            } else {
                this.setState({
                    player: 'sissor',
                    bot: 'sissor',
                    result: 'draw'
                })
            }
        }
    }
    render() {
        return (
            <div>
                <h1>player: {this.state.player}</h1>
                <h1>{this.state.result}</h1>
                <h1>bot: {this.state.bot}</h1>
                <button onClick={() => this.handleGame()}>
                    start game!
                </button>
            </div>
        )
    }
}