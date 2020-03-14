import React from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom"
import Transactions from './Transactions';
import Split from './Split';
import '../App.css';
import NavList from '../components/NavList';
import MenuBar from '../components/MenuBar';

function Home() {
  return (
    <HashRouter>
      <MenuBar className="AppBar"/>
    <div>
      <div className="Sidebar">
        <h1 className="SplitLogo">Sp/it</h1>
        <NavLink to="/"><button>Sign Out</button></NavLink>
        <NavList />
        {/* <ul className="">
        <NavLink className="NavText" to="/home/transactions"><button className="NavOptions">Transactions</button></NavLink>
        <NavLink className="NavText" to="/home/split"><button className="NavOptions">Split</button></NavLink>
        </ul> */}
        </div>
        <div className="HomeScreen">
          <Route path="/home/transactions" component={Transactions}/>
          <Route path="/home/split" component={Split}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default Home;
