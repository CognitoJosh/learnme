import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import UserLog from './components/login.jsx';
import TeacherForm from './components/teacherForm.jsx';
import StudentForm from './components/studentForm.jsx';
import CounselorForm from './components/counselorForm.jsx';
import LancerForm from './components/lancerForm.jsx';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/login" element={<UserLog />} />
        <Route path="/teacherForm" element={<TeacherForm />} /> 
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/counselorForm" element={<CounselorForm/>} />
        <Route path="/lancerForm" element={<LancerForm/>} />
      </Routes>
    </div>
  );
}

export default App;
