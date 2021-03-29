import React,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  //   static getDriveStateFromprops(props ,state) {
  //   console.log('[Persons.js] getDriveStateFromProps');
  //  return state;
  // }

  // UNSAFE_componentWillReceiveProps(props){
  //  console.log('[persons.js] componentWillRecieveProps',props)
  // }

  // shouldComponentUpdate(nextProps , nextState){
  //  console.log('[Persons.js] shouldComponentUpdate');
  //  if(
  //    nextProps.person!== this.props.person || 
  //    nextProps.clicked !== this.props.clicked|| 
  //    nextProps.changed!==this.props.changed){
  //    return true;

  //  } else{
  //  return false;
  //  }

  // }
   
  getSnapshotBeforeUpdate(prevProps , prevState){
   console.log('[Persons.js] getSnapshotBeforeUpdate');
   return {message:'snapShot'};
  }

    componentDidUpdate(prevProps , prevState , snapShot){
      console.log('[Perons.js] componentDidUpdate');
      console.log(snapShot);
    }
  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          isAuth = {this.props.isAuthenticated}
        />
      );
    });
  }
  
};

export default Persons;
