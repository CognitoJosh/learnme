import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './studentForm.css'

class studentForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fname: '', gender: 'Male', gmail: '', pass: [], dept: '', cNumber: '', dob: ''

        } 
    }

fullName = event => {
    this.setState({fname: event.target.value})
} 
gender = event => {
    this.setState({gender: event.target.value})
}
gmail = event => {
    this.setState({gmail: event.target.value})
}
pass = event => {
    this.setState({pass: event.target.value})
} 
dept = event => {
    this.setState({dept: event.target.value})
}
cNum = event => {
    this.setState({cNum: event.target.value})
}
dob = event => {
    this.setState({dob: event.target.value})
} 
subMe = event => {
    console.log(`${this.state.fname}, ${this.state.pass}, ${this.state.gmail}, ${this.state.dob}`)

}



    render () {
        return (
              <div className='student-body'>
                          <div className='innerStudent'>
                          <form onSubmit={this.subMe} className='Sfill'>
                              <h1 className='Swelcome'>Hello Student</h1>
                           <div className='Splay'>  
                              <input type='text' className='Sinp1' placeholder='Full name'  onChange={this.fullName} required />  <br/>
                              <select onChange={this.gender} className='SinpY'>
                                      <option>Gender</option>
                                      <option>Male</option>
                                      <option>Female</option>
                                  </select> <br/>
                              </div>
                          <div className='Splay'>  
                          <input type='text' className='Sinp2' placeholder='Gmail' onChange={this.gmail} required />  <br/>
                          <input type='password' className='Sinp3'  placeholder='Password' onChange={this.pass} required />  <br/>
                          </div>
                          <div className='Splay'>
                          <input type='text'className='Sinp4' placeholder='Department' onChange={this.dept} required />  <br/>
                          <input type='text' className='Sinp5' placeholder='Contact number' onChange={this.cNum} required />  <br/>
                          </div> 
                            <label className='Stheme'>Display picture:</label>
                          <input type='file' className='SinpX' placeholder='Display picture' onChange={this.dp} required /> <br/>
                        <label className='Stheme'>Date of birth:</label>
                          <input type='date' className='SinpX' placeholder='Date of birth' onChange={this.dob} required />  <br/>
                          <button className='Sbtn1'>Submit</button>
                          <p>or</p>
                         <Link to="/login">  <button className='Sbtn2'>Log in</button> </Link>
                          </form>
                          </div>
                       </div>
        )
    }
}


export default studentForm