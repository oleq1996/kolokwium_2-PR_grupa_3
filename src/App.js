import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import OKhome from "./components/OKhome";
import OKNavbar from "./components/OKnavbar";

function App() {

  return (
      <div className="container-fluid">
        <OKNavbar/>
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={OKhome} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
