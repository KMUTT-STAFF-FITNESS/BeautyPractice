import React, { Component } from 'react'

const weapons = ["rock","paper","sissor"]

export default class Player extends Component {
    state = {
        player: weapons[0],
        bot: weapons[0],
      };
    game = () => {
        const {player,bot} = this.state;

        if (player == bot) {
            return "same-_-"
        } else if (player == "rock" && bot == "sissor")||
        (player == "sissor" && bot == "paper")||
        (player == "paper" && bot=="rock")
         {
            return "You win yay!!!"
            
        }else{
            return "You Lost..."
        }
    }
    render() {

        return (
            <div>
                <Button variant="outline-secondary" onClick={() => this.}>Paper</Button>
            </div>
        )
    }
}


