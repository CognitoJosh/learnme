import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './counsel.css'

class counselorForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fname: '', dp: '', gender: 'Male', gmail: '', pass: '', qfication: 'PhD', expe: '1 year', cNumber: '', dob: '', summary: ''

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
qfication = event => {
    this.setState({qfication: event.target.value})
}
expe = event => {
    this.setState({expe: event.target.value})
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
             <div className='counsel-body'>
                        <div className='innerCounsel'>
                        <form onSubmit={this.subMe} className='Cfill'>
                            <h1 className='Cwelcome'>Hello Counselor</h1>
                         <div className='Cplay'>  
                            <input type='text' className='Cinp1' placeholder='Full name'  onChange={this.fullName} required />  <br/>
                            <select onChange={this.gender} className='CinpY'>
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select> <br/>
                            </div>
                        <div className='Cplay'>  
                        <input type='text' className='Cinp2' placeholder='Gmail' onChange={this.gmail} required />  <br/>
                        <input type='password' className='Cinp3'  placeholder='Password' onChange={this.pass} required />  <br/>
                        </div>
                        <div className='Cplay'>
                        <input type='text'className='Cinp4' placeholder='Department' onChange={this.dept} required />  <br/>
                        <input type='text' className='Cinp5' placeholder='Contact number' onChange={this.cNum} required />  <br/>
                        </div>
                         <label className='Ctheme'>Highest Qualification:</label>
                        <select onChange={this.qfication} className='CinpX1'>
                            <option>PhD</option>
                            <option>BSc</option>
                            <option>HND</option>
                        </select> <br/>
                        
                         <label className='Ctheme'>Years of experience:</label>
                        <select onChange={this.qfication} className='CinpX1'>
                            <option>1 year</option>
                            <option>2 years</option>
                            <option>3+ years</option>
                        </select> <br/>
                          <label className='Ctheme'>Display picture:</label>
                        <input type='file' className='CinpX' placeholder='Display picture' onChange={this.dp} required /> <br/>
                      <label className='theme'>Date of birth:</label>
                        <input type='date' className='CinpX' placeholder='Date of birth' onChange={this.dob} required />  <br/>
                        <textarea cols={25}  rows={8} placeholder='Professional summary'className='inp6'  onChange={this.summary} required />  <br/>
                        <button className='Cbtn1'>Submit</button>
                        <p>or</p>
                       <Link to="/login">  <button className='Cbtn2'>Log in</button> </Link>
                        </form>
                        </div>
                     </div>
        )
    }
}


export default counselorForm