import './App.css';
import Homepage from './component/Homepage';
import HealthHygiene from "./component/HealthHygiene";
import CommunicationSkill from './component/CommunicationSkill';
import PresentationSkill from "./component/PresentationSkill";
import TechnicalSkill from "./component/TechnicalSkill";
import PhysicalAppearance from "./component/PhysicalAppearance";

import{
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Homepage />
        <div className="container my-3">
          <Switch>
            <Route exact path="/HealthHygiene">
              <HealthHygiene />
            </Route>
            <Route
              exact path="/CommunicationSkill"
            >
              <CommunicationSkill />
            </Route>
            <Route exact path="/PresentationSkill">
              <PresentationSkill />
            </Route>
            <Route exact path="/TechnicalSkill">
              <TechnicalSkill />
            </Route>
            <Route exact path="/PhysicalAppearance">
              <PhysicalAppearance />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
