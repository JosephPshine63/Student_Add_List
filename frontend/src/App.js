import './App.css';
import Appbar from './components/appbar/Appbar';
import StudentsTextfield from './components/students_textfield/StudentsTextfield';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <StudentsTextfield/>
    </div>
  );
}

export default App;
