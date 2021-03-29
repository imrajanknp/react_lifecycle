import React ,{Component} from 'react';
import Auxilary from '../../../containers/Hoc/Auxilary';
import withClass from '../../../containers/Hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../containers/context/auth-context';
// import authContext from '../../../containers/context/auth-context';

 class Person extends Component {
   constructor(props){
     super(props);
     this.inputElementRef = React.createRef();
   }

  //  static contextType = authContext;

  componentDidMount(){
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
   render (){
    console.log('[Person.js] rendering...');
    return (
      <Auxilary>
        <AuthContext.Consumer>
          {(context => context.authenticated ? <p>Authenticated!</p> : <p>Plz login</p>)}
        </AuthContext.Consumer>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text"
        // ref={(inputEl)=>{this.inputElement=inputEl} }
        ref= {this.inputElementRef}
         onChange={this.props.changed}
         value={this.props.name} />
      </div>
      </Auxilary>
    );
   }
};

Person.propTypes ={
  click: PropTypes.func,
  name: PropTypes.string,
  age:PropTypes.number,
  changed: PropTypes.func,
};

export default  withClass (Person ,classes.Person);
