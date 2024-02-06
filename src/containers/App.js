import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            //2 states which changes in an app
            robots: [], //Will fetch the information to be displayed from an API
            searchfield: ''
        }
    }

    componentDidMount() {
        //Fetch User Info from Json API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({robots:users}));
    }

    //This is going to change the state of the searchfiled value from default '' to whatever is entered
    onSearchChange = (Event) => {
        this.setState({searchfield: Event.target.value})
    }

    render () {
        const   {robots, searchfield} = this.state;
        //State is managed in here. Managed by App component and can pass down props
        const filteredRobots = robots.filter(robot => {
            //This is what is going to compare the text in the search box to the robot names
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        //Loading Bar if its taking a while to load
        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    {/* Takes information from seachbox and communicates to Card List */}
                    <SearchBox searchChange = {this.onSearchChange}/>
                    {/* Allows scrolling of card list component only instead of whole page */}
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;