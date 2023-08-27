import React, { Component } from "react";
import{
    Route,
    NavLink,
    HashRouter
} from "react";
import Home from "./Home";
import Date from "./Date";
import Time from "./Time";
import Note from "./Note";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Remind Me</h1>
                    <u1 className="header">
                        <li><NavLink exact to="/home">Home</NavLink></li>
                        <li><NavLink to="/date">Date</NavLink></li>
                        <li><NavLink to="/time">Time</NavLink></li>
                        <li><NavLink to="/note">Note</NavLink></li>
                    </u1>
                    <div className="content">
                        <Route exact path="/home" Component={Home}/>
                        <Route path="/date" Component={Date}/>
                        <Route path="/time" Component={Time}/>
                        <Route path="/note" Component={Note}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
