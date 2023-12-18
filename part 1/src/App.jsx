import "./App.css";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div>
      <h1>Courses (3)</h1>
      <div className="course-list">
        <CourseList/>
      </div>
    </div>
  );
}

export default App;

