import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'


class BotsPage extends Component {
  //start here with your code for step one
  state = {

    bots: [],
    botArmy: []
    
    }
    componentDidMount() {
  
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(bots => this.setState({bots}))
    
    
    }
    addToBotArmy = (bot) => {
      if (!this.state.botArmy.includes(bot)){
      this.setState({botArmy: [...this.state.botArmy, bot]})
    }}


  render() {
    
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} />
        <BotCollection 
        bots={this.state.bots} 
        addToBotArmy={this.addToBotArmy} 
        />
        
      </div>
    );
  }

}

export default BotsPage;
