import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      < div className="sidebar" >
        <p>sidebar</p>
        <p><Link to="/">top</Link></p>
        <p><Link to="/todo">Todo</Link></p>
        <p><Link to="/thread1">thread1</Link></p>
        <p><Link to="/thread2">thread2</Link></p>
      </div >
    );
  }
}

export default SideBar;
