import "./App.css";
import AddNewNote from "./components/AddNewNote";


function App() {
  return (
    <div className="container">
      <div className="note-header">Note header</div>
      <div className="note-app">
        <AddNewNote/>
        <div className="note-container"> My Notes </div>
      </div>
    </div>
  );
}

export default App;
