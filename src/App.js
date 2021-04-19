import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './FunctionalComponent/Navigation';
import Main from './Pages/Main';
import IsraelsNationalTeam from './Pages/IsraelsNationalTeam';
import Competitions from './Pages/Competitions';
import About from './Pages/About';
import Ranks from './Pages/Ranks';
import ContactUs from './Pages/ContactUs';
import Post from './Pages/Post';
import AllPosts from './Pages/AllPosts';
import AllCompetitions from './Pages/AllCompetitions';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/Main" component={Main} />
          <Route path="/IsraelsNationalTeam" component={IsraelsNationalTeam} />
          <Route path="/AllCompetitions" component={AllCompetitions} />
          <Route path="/About" component={About}  />
          <Route path="/Ranks" component={Ranks} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Post" component={Post} />
          <Route path="/AllPosts" component={AllPosts} />
          <Route path="/Competitions" component={Competitions} />
        </Switch>
      </div>



    </BrowserRouter>
  );
}

export default App;