import React from "react";
import { Switch, Route } from 'react-router-dom';

import Top from './top';
import Thread1 from './threads/Thread1';
import Thread2 from './threads/Thread2';
import Todo from './todo';

const Main = () => {
  return (
    <Switch className="main">
      <Route path="/thread1" component={Thread1} />
      <Route path="/thread2" component={Thread2} />
      <Route path="/todo" component={Todo} />
      <Route component={Top} />
    </Switch>
  );
}

export default Main;
