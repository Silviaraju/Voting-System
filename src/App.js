
import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Grand Canyon", votes: 0},
				{name: "Manhattan", votes: 0},
				{name: "Yellowstone", votes: 0},
        {name: "Golden Gate Bridge", votes: 0},
        {name: "Niagara Falls", votes: 0}
			]
		}
	}

	vote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			<>
				<h1>Vote for your favorite tourist attraction!</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Confirm</button>
							</div>
						)
					}
				</div>
        <h1>Thanks for casting your valuable vote! Have a good day!</h1>
			</>
		);
	}
}
export default App;