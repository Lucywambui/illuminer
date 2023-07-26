import Alert from "./components/Alert";
import NotesGroup from "./components/NotesGroup";
import 'bootstrap/dist/css/bootstrap.css';

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
return <div><Alert text="Hello World" /></div>
}

export default App;