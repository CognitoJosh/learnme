import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './teacherForm.css'

class teacherForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fname: '', dp: '', gender: 'Gender', gmail: '', pass: '', qfication: 'PhD', dept: '', cNumber: '', dob: '', summary: ''

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
            <div className='teacher-body'>
            <div className='innerTeacher'>
            <form onSubmit={this.subMe} className='fill'>
                <h1 className='Twelcome'>Hello Teacher</h1>
             <div className='play'>  
                <input type='text' className='inp1' placeholder='Full name'  onChange={this.fullName} required />  <br/>
                <select onChange={this.gender} className='inpY'>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select> <br/>
                </div>
            <div className='play'>  
            <input type='text' className='inp2' placeholder='Gmail' onChange={this.gmail} required />  <br/>
            <input type='password' className='inp3'  placeholder='Password' onChange={this.pass} required />  <br/>
            </div>
            <div className='play'>
            <input type='text'className='inp4' placeholder='Department' onChange={this.dept} required />  <br/>
            <input type='text' className='inp5' placeholder='Contact number' onChange={this.cNum} required />  <br/>
            </div>
             <label className='theme'>Highest Qualification:</label>
            <select onChange={this.qfication} className='inpX1'>
                <option>PhD</option>
                <option>BSc</option>
                <option>HND</option>
            </select> <br/>
              <label className='theme'>Display picture:</label>
            <input type='file' className='inpX' placeholder='Display picture' onChange={this.dp} required /> <br/>
          <label className='theme'>Date of birth:</label>
            <input type='date' className='inpX' placeholder='Date of birth' onChange={this.dob} required />  <br/>
            <textarea cols={25}  rows={8} placeholder='Professional summary'className='inp6'  onChange={this.summary} required />  <br/>
            <button className='btn1'>Submit</button>
            <p>or</p>
           <Link to="/login">  <button className='btn2'>Log in</button> </Link>
            </form>
            </div>
         </div>
        )
    }
}


export default teacherForm