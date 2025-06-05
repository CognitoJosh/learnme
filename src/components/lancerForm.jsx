import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './lancerForm.css'

class lancer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fname: '', dp: '', gender: 'Male', gmail: '', pass: '', service: 'Tech', expe: '1 year', dept: '', cNumber: '', dob: '', summary: ''

        } 
    }

fullName = event => {
    this.setState({fname: event.target.value})
}
dp = event => {
    this.setState({dp: event.target.value})
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
service = event => {
    this.setState({service: event.target.value})
}
expe = event => {
    this.setState({expe: event.target.value})
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
summary = event => {
    this.setState({summary: event.target.value})
}
subMe = event => {
    alert(`${this.state.fname}, ${this.state.gender}, ${this.state.dp}, ${this.state.dob}`)

}


    render () {
        return (
           <div className='lancer-body'>
                       <div className='innerLancer'>
                       <form onSubmit={this.subMe} className='Lfill'>
                           <h1 className='Lwelcome'>Hello Lancer</h1>
                        <div className='play'>  
                           <input type='text' className='inp1' placeholder='Full name'  onChange={this.fullName} required />  <br/>
                           <select onChange={this.gender} className='inpY'>
                                   <option>Gender</option>
                                   <option>Male</option>
                                   <option>Female</option>
                               </select> <br/>
                           </div>
                       <div className='Lplay'>  
                       <input type='text' className='Linp2' placeholder='Gmail' onChange={this.gmail} required />  <br/>
                       <input type='password' className='Linp3'  placeholder='Password' onChange={this.pass} required />  <br/>
                       </div>
                       <div className='Lplay'>
                       <input type='text'className='Linp4' placeholder='Department' onChange={this.dept} required />  <br/>
                       <input type='text' className='Linp5' placeholder='Contact number' onChange={this.cNum} required />  <br/>
                       </div>
                        <label className='Ltheme'>Service:</label> <br/>
                       <select onChange={this.qfication} className='LinpX1'>
                           <option>Tech</option>
                           <option>Beauty</option>
                           <option>Entertainment</option>
                       </select> <br/>
                         <label className='Ltheme'>Display picture:</label>
                       <input type='file' className='LinpX' placeholder='Display picture' onChange={this.dp} required /> <br/>
                     <label className='Ltheme'>Date of birth:</label>
                       <input type='date' className='LinpX' placeholder='Date of birth' onChange={this.dob} required />  <br/>
                       <textarea cols={25}  rows={8} placeholder='Professional summary'className='inp6'  onChange={this.summary} required />  <br/>
                       <button className='Lbtn1'>Submit</button>
                       <p>or</p>
                      <Link to="/login">  <button className='Lbtn2'>Log in</button> </Link>
                       </form>
                       </div>
                    </div>

        )
    }
}


export default lancer




 