import React from "react";
import BotCard from "../components/BotCard";
// import BotsPage from './BotsPage'

// class BotCollection extends React.Component {
  //your code here
  const BotCollection = (props) => {
	  const botCollection = props.bots.map(bot => {
		//   console.log('botCollection', botCollection)
		  return <BotCard
			key={bot.id} 
			bot={bot} 
			addToBotArmy={props.addToBotArmy}
			  />
	  })
	
  



//   render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botCollection}
    		</div>
  	  </div>
	  );
}
//   }

// };

export default BotCollection;
