import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/postDetails/:id">
              <PostDetails></PostDetails>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
