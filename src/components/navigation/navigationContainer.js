import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
      return (
        <div className="nav-link-wrapper">
          <NavLink to={route} activeClassName="nav-link-active">
            {linkText}
          </NavLink>
        </div>
      );
    };

    return (
        <div className="nav-wrapper">
          
            <div className="nav-link-wrapper">
              <NavLink exact to="/" activeClassName="nav-link-active">
                Home
              </NavLink>
            </div>
    
            <div className="nav-link-wrapper">
              <NavLink to="/about" activeClassName="nav-link-active">
                About
              </NavLink>
            </div>
    
            <div className="nav-link-wrapper">
              <NavLink to="/experience" activeClassName="nav-link-active">
                Experience
              </NavLink>
            </div>
    
            <div className="nav-link-wrapper">
              <NavLink to="/create" activeClassName="nav-link-active">
                Create
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/connect" activeClassName="nav-link-active">
                Connect
              </NavLink>
            </div>

        </div>
      );
    };
    
    export default withRouter(NavigationComponent);
    