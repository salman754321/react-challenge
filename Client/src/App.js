import './App.css';
import React, {useState} from 'react';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import TopMenu from './Menu/TopMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList, faIndustry } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {

const [Name , setName] = useState("");

  const SelectedUserDetail=({match})=>{
    console.log(1,match)
      let id = parseInt(match.params.id,10);
    console.log(id);
    return(
  
    <UserDetails id={id} />
    )
  }
  //State toggles the navigation menu
  const [collapse, setCollapse] = useState(false)
  
  const handleCollapse =(e) =>{
    e.preventDefault()
    setCollapse(v => !v)
  }

  // apply CSS according to the width of the page
  let menu = collapse
      ? "main-menu is-shadow-2 nav-is-closed"
      : "main-menu is-shadow-2 nav-is-open";
  let page = collapse
      ? "is-sidePage page-navClosed"
      : "is-sidePage page-navOpen";

  return (

      // Navigation menu
      <Router>
        <div className="is-main is-100 is-row">
          <div className={menu}>
            <div className="navigation">
              <div className="navigation-container">
                <div
                    className="navigation-item"
                    onClick={(e)=>handleCollapse(e)}
                >
                  <div className="navigation-item__icon">
                    <FontAwesomeIcon icon={faThList} />
                  </div>
                  <span className="navigation-item__text">Hide Menu</span>
                </div>
                <hr />
                <NavLink to={"/"} activeClassName="navigation-item-is-active">
                  <div className="navigation-item white-link">
                    <div className="navigation-item__icon">
                      <FontAwesomeIcon icon={faIndustry} />
                    </div>
                    <span className="navigation-item__text">Albums</span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>


          {/* Top menu of the page  */}
          <TopMenu Name ={Name} setName={setName}/>

          {/* Main page to display information  where the page switch takes place*/}
          <div className={page}>
            <div className="is-pageBody">
              <div className="is-page-content">
                <Switch>
                  <Route exact path="/">
                    <Users Name={Name }/>
                  </Route>
                    <Route path="/User/:id" component={({match})=> <UserDetails id={parseInt(match.params.id,10)} />}>
                     
                    </Route>
                {/*  <Route exact path="/User/:id" component={SelectedUserDetail} / > */}
                  
                  
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
