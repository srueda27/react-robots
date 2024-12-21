import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
    .then((users) => setRobots(users));
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  };


  const filteredBots = robots.filter((bot) => bot.name
    .toLowerCase()
    .includes(searchfield.toLowerCase())
  );

  if (robots.length === 0) {
    return <h1> Loading.... </h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Bots</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredBots} />
        </Scroll>
      </div>
    );
  }

}

export default App;
