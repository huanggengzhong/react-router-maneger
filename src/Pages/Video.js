import React from "react";
import { Route, Link } from "react-router-dom";
import Reactpage from './video/React'
import Vue from './video/Vue'
import Flutter from './video/Flutter'


function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React教程</Link></li>
                    <li><Link to="/video/vue">Vue教程</Link></li>
                    <li><Link to="/video/flutter">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                {/* <div><h3>视频教程</h3></div> */}
                <Route path="/video/reactpage/" ><Reactpage/></Route>
                <Route path="/video/vue/"   ><Vue /></Route>
                <Route path="/video/flutter/"   ><Flutter /></Route>           
            </div>
        </div>
    )
}
export default Video;