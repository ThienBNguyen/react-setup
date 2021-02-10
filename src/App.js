import "./App.scss";
import Header from "./components/parts/Header/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Mentees from "./components/pages/H-came/Mentees/Mentees";
import Mentors from "./components/pages/H-came/Mentors/Mentors";
import LeaderBoard from "./components/pages/H-came/LeaderBoard/LeaderBoard";
function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/matches.mentee" component={Mentees} />
        <Route path="/mentors.hcame" component={Mentors} />
        <Route path="/leaderboard.hcame" component={LeaderBoard} />
      </Switch>
    </Router>
  );
}

export default App;
