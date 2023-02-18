import React from "react";
import "./style.css";
import UserComponent from './UserComponent';

export default class App extends React.Component {
  render (){
    return(
      <UserComponent name={"Ram"} projects={
        ["ShoppingCart"]} age={101}></UserComponent>
  );
}
}