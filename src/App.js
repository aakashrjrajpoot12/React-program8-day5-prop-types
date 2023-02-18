import React from "react";
import "./style.css";
import UserComponent from './UserComponent';

export default class App extends React.Component {
  render (){
    return(
      <UserComponent name={"Ram"} projects={
        ["ShoppingCart"]} age={100}> {/* if we had given age greater then 100 it will show warning inside console to see that above console click on Refresh symbol */}
       </UserComponent>
  );
}
}