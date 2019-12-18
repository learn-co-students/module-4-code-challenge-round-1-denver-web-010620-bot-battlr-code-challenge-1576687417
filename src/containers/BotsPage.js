import React, { Component } from "react";
import BotCollection from './BotCollection'


class BotsPage extends Component {
  //start here with your code for step one
  state = {

    bots: [
      {
        id: '',
        name: '',
        health: '',
        damage: '',
        armor: '',
        bot_class: '',
        catchphrase: '',
        avatar_url: ''
      }
    ]
    }
    componentDidMount() {
  
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(bots => this.setState({bots}))
    
    
    }



  render() {
    return (
      <div>
        <BotCollection />
      </div>
    );
  }

}

export default BotsPage;
