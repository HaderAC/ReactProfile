import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
   <HashRouter basename={process.env.PUBLIC_URL}>
     <Route exact path="/" component={Home}/>
     <Route exact path="/portfolio" component={Portfolio}/>
     <Route exact path="/contact" component={Contact}/>
     <Footer/>
   </HashRouter>
  );
}

export default App;
