import "./App.css";
import NavBar from "./components/Header/NavBar";
import { useState } from "react";
import Home from "./components/Home/Home";
import { Route, Switch, useHistory } from "react-router";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Pages/SignUp";
import Pricing from "./components/Prices/Pricing";
import ToggleMode from "./components/ToggleMode";
const App = () => {
  const history = useHistory()
  const [toggleMode, setToggleMode] = useState(false);
  const [checkSignState, setCheckSignState] = useState(false)
  const toggle = () => {
    setToggleMode(!toggleMode);
  };
  const onSubmit = (e) => {
    e.preventDefault()
    history.push("/")
    setCheckSignState(curr => !curr)
  }
  const btnClick = () => {
    setCheckSignState(curr => !curr)
    console.log("object")
  }
  return (
    <div className="overflow-x-hidden">
      <Switch>
        <Route exact path="/">
          <ToggleMode toggle={toggle} toggleMode={toggleMode} />
          <NavBar
            NavLight={toggleMode}
            checkSignState={checkSignState}
            btnClick={btnClick}
          />
          <Home NavLight={toggleMode} />
          <Pricing />
          <Footer NavLight={toggleMode} />
        </Route>
        <Route path="/signup">
          <SignUp onSubmit={onSubmit} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
