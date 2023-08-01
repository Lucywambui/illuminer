import Alert from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.css';
import MainPageHeaders from "./components/MainpageHeader";
import '../src/styles/index.scss'


function App(){
  // let items = [
  //   "Retrospective for third Sprint",
  //   "31st May Meeting",
  //   "Stakeholder Meeting",
  //   "Daily Scrum",
  //   "Sprint Planning Meeting",
  // ];
  // //create an event handler callback function 
  // const handleSelectNote = (note: string)=> {
  //   console.log(note)
  // }
  // return <div><NotesGroup notes={items} heading="All Notes" onSelectNote={handleSelectNote}/></div>
return( <div><LoginForm email="" password=""/></div>)
{/* <div><Alert text="Hello World" /></div> */}
}

export default App;