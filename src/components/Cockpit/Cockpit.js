import React, { useEffect  , useRef} from 'react';
import AuthContext from '../../containers/context/auth-context';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
  const toggleBtnRef = useRef(null);


  useEffect(() =>{
   console.log('[Cockpit.js] yo yo yo')
  //  setTimeout(()=>{
  //    alert('this is data is updated ')
  //  } ,1000)
    toggleBtnRef.current.click();
     return () =>{
       console.log(' bebebebbeeeeeeeeeeeee')
     }
  }, []);

  useEffect(()=>{
    console.log('[Cockpit.js] 22yo 22yo 22yo');
    return () =>{
      console.log(' bebe3333bebbee3333333eeeeeeee3333333eee')
    }
  })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personslLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personslLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>

                <AuthContext.Consumer>
                  {(context) =>
                   <button onClick={context.login}> login </button> }
                 
                </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);