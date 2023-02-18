import React from 'react';
import PropTypes from 'prop-types';//for this on left side down>>Dependencies>>Enter package name>>write there>>npm install prop-types>>press enter key

export default class UserComponent extends React.Component{
  render(){
    return(
      <>
      <h2>PropTypes Demo</h2>
      <h4>Check the warning message in the java script console</h4>
      <p>Name: {this.props.name}</p>
      <p>Projects: {this.props.projects}</p>
      <p>Age: {this.props.age}</p>

      </>
    );
  }
}

UserComponent.propTypes={   //PropTypes is an object of UserComponent.
  name:PropTypes.string.isRequired,    //name should be string
  projects:PropTypes.array,      //projects should be of type array      
  age(props,propName){        //for project we had write our custom validation
    if(typeof props[propName]!=='number'){
      return new Error('Age must be a number');
     }
     if(props[propName]>100){
       return new Error('Age entered is'+props[propName]+', it should be less than or equal to 100'
       );
     }

  },//age ends here
};

UserComponent.defaultProps={       //defaultsProps is an object of UserComponent.
  name:'Vinay',  //when you are not passing any vale of name inside App.js then it would take bydefault value of name from here
};
