import React, {Component}  from 'react';  
import {Link} from 'react-router-dom';
import './login.css';

class userLog extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            usergmail: '',
            userpass: ''
        } 
        this.typeUser = React.createRef();
    }
  


   
    gmail = event => {
        this.setState({usergmail: event.target.value})
    }
    pass = event => {
        this.setState({userpass: event.target.value})
    }
     cancel = () => {
        if(this.typeUser.current) {
            this.typeUser.current.style.display = 'none';
        }
    }
    pick = (event) => {
        if (this.typeUser.current) {
            this.typeUser.current.style.display = 'block';
        }
    } 
     userSubmit = (event) => {
        alert(`${this.state.usergmail}, ${this.state.userpass}`)
        event.preventDefault();
    }
   

   render () {
     return (
        <div className='main-body'>
         <div className='Loginner'>
            <h1 className='Logwelcome'>Welcome Back!</h1>
        <form onSubmit={this.userSubmit} className='main-fill'>
            <h1 className='Logpapilo'> Log in </h1>
            <input type='text' className='Loginp1' placeholder='G-mail' onChange={this.gmail} required />  <br />
            <input  type='password' className='Loginp2' placeholder='Password' onChange={this.pass} required />  <br />
            <p>forgot password?</p>
            <button className='Logbtn1'> Log in </button>  
            <p>or</p> 
             <button onMouseOver={this.pick} className='Logbtn2'> Sign up </button>
          <div className="typeUser" ref={this.typeUser} >
          <div onClick={this.cancel}>Cancel</div>
          <Link to="/teacherForm"><p>As a Teacher</p></Link>
          <Link to="/studentForm"><p>As a Student</p></Link>
          <Link to="/counselorForm"><p>As a Counselor</p></Link>
          <Link to="/lancerForm"><p>As a Freelancer</p></Link>
        </div>
        </form>
         
       </div>
    </div>
    )
    
   }
}
   


export  default userLog